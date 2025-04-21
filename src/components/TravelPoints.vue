<template>
  <div class="container py-4">
    <h2 class="mb-4">Your Travel Points</h2>

    <div class="mb-3 position-relative">
      <input
        v-model="searchQuery"
        @input="fetchSuggestions"
        @keydown.down.prevent="highlightNext"
        @keydown.up.prevent="highlightPrev"
        @keydown.enter.prevent="selectHighlighted"
        type="text"
        class="form-control"
        placeholder="Enter location name"
      />
      <ul v-if="suggestions.length" class="list-group position-absolute w-100 z-3">
        <li
          v-for="(suggestion, index) in suggestions"
          :key="index"
          :class="['list-group-item', { active: index === highlightedIndex }]"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion.display_name }}
        </li>
      </ul>
    </div>

    <div class="mb-3">
      <select v-model="selectedCategory" class="form-select">
        <option value="" disabled>Select Category</option>
        <option value="Attraction">Attraction</option>
        <option value="Accommodation">Accommodation</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <button class="btn btn-primary mb-4" @click="addPoint">Add Point</button>

    <div class="mb-3">
      <h4>Your Added Points:</h4>
      <ul class="list-group">
        <li v-for="(point, index) in points" :key="index" class="list-group-item">
          {{ point.name }} - {{ point.category }}
          <button class="btn btn-danger btn-sm ml-2" @click="deletePoint(index)">Delete</button>
        </li>
      </ul>
    </div>

    <div id="map" style="height: 500px;"></div>
  </div>
</template>

<script>
import L from "leaflet";
import { db } from '../firebase';
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

export default {
  name: "TravelPoints",
  props: {
    tripId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      map: null,
      markerGroup: null,
      searchQuery: "",
      selectedCategory: "",
      suggestions: [],
      highlightedIndex: -1,
      points: [],
      unsubscribe: null,
      errorMessage: ""
    };
  },
  mounted() {
    this.initMap();
    this.loadPoints();
  },
  beforeUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    if (this.map) {
      this.map.remove();
    }
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([52.237049, 21.017532], 6);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
      this.markerGroup = L.layerGroup().addTo(this.map);
    },

    async fetchSuggestions() {
      if (this.searchQuery.length < 3) {
        this.suggestions = [];
        return;
      }

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${this.searchQuery}&limit=5`
        );
        this.suggestions = await response.json();
        this.highlightedIndex = -1;
      } catch (e) {
        console.error("Error fetching suggestions:", e);
        this.errorMessage = "Failed to load suggestions";
      }
    },

    highlightNext() {
      if (this.highlightedIndex < this.suggestions.length - 1) {
        this.highlightedIndex++;
      }
    },

    highlightPrev() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex--;
      }
    },

    selectHighlighted() {
      if (this.highlightedIndex >= 0) {
        this.selectSuggestion(this.suggestions[this.highlightedIndex]);
      }
    },

    selectSuggestion(suggestion) {
      this.searchQuery = suggestion.display_name;
      this.suggestions = [];
      this.highlightedIndex = -1;
      
      if (suggestion.lat && suggestion.lon) {
        const coords = [parseFloat(suggestion.lat), parseFloat(suggestion.lon)];
        this.map.setView(coords, 13);
      }
    },

    async addPoint() {
      if (!this.searchQuery || !this.selectedCategory) {
        this.errorMessage = "Please provide a location and category.";
        return;
      }

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${this.searchQuery}`
        );
        const data = await response.json();

        if (!data.length) {
          this.errorMessage = "Location not found.";
          return;
        }

        const { lat, lon, display_name } = data[0];
        const coords = [parseFloat(lat), parseFloat(lon)];

        const pointData = {
          name: display_name,
          category: this.selectedCategory,
          coords: coords,
          createdAt: new Date()
        };

        await addDoc(collection(db, 'trips', this.tripId, 'points'), pointData);
        
        this.searchQuery = "";
        this.selectedCategory = "";
        this.errorMessage = "";
      } catch (e) {
        console.error("Error adding point:", e);
        this.errorMessage = "Failed to add point: " + e.message;
      }
    },

    loadPoints() {
      this.unsubscribe = onSnapshot(
        collection(db, 'trips', this.tripId, 'points'),
        (snapshot) => {
          this.markerGroup.clearLayers();
          this.points = [];
          
          snapshot.forEach((doc) => {
            const data = doc.data();
            const marker = L.marker(data.coords, { draggable: true })
              .addTo(this.markerGroup)
              .bindPopup(`${data.name}<br><small>${data.category}</small>`);

            this.points.push({
              id: doc.id,
              ...data,
              marker
            });
          });
        },
        (error) => {
          console.error("Error loading points:", error);
          this.errorMessage = "Failed to load points";
        }
      );
    },

    async deletePoint(index) {
      const point = this.points[index];
      try {
        await deleteDoc(doc(db, 'trips', this.tripId, 'points', point.id));
        this.markerGroup.removeLayer(point.marker);
        this.points.splice(index, 1);
      } catch (e) {
        console.error("Error deleting point:", e);
        this.errorMessage = "Failed to delete point";
      }
    }
  }
};
</script>

<style scoped>
.list-group-item.active {
  background-color: #007bff;
  color: white;
}

.error {
  color: red;
  margin-top: 10px;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.z-3 {
  z-index: 3;
}

#map {
  border-radius: 8px;
  border: 1px solid #ddd;
}
</style>