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

export default {
  name: "TravelPoints",
  props: {
    defaultCountryCoords: {
      type: Array,
      default: () => [52.237049, 21.017532] // default to Warsaw
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
      points: []
    };
  },
  mounted() {
    this.map = L.map("map").setView(this.defaultCountryCoords, 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.markerGroup = L.layerGroup().addTo(this.map);
  },
  methods: {
    async fetchSuggestions() {
      if (this.searchQuery.length < 3) {
        this.suggestions = [];
        return;
      }

      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${this.searchQuery}&limit=5`);
        this.suggestions = await response.json();
        this.highlightedIndex = -1;
      } catch (e) {
        console.error("Error fetching suggestions:", e);
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.suggestions.length - 1) this.highlightedIndex++;
    },
    highlightPrev() {
      if (this.highlightedIndex > 0) this.highlightedIndex--;
    },
    selectHighlighted() {
      if (this.highlightedIndex >= 0) {
        this.selectSuggestion(this.suggestions[this.highlightedIndex]);
      }
    },
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion.display_name;
      this.suggestions = [];
    },
    async addPoint() {
      if (!this.searchQuery || !this.selectedCategory) {
        alert("Please provide a location and category.");
        return;
      }

      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${this.searchQuery}`);
        const data = await response.json();
        if (!data.length) return alert("Location not found.");

        const { lat, lon, display_name } = data[0];
        const coords = [parseFloat(lat), parseFloat(lon)];

        const marker = L.marker(coords, { draggable: true })
          .addTo(this.markerGroup)
          .bindPopup(`${display_name}<br><small>${this.selectedCategory}</small>`)
          .openPopup();

        marker.on("dragend", () => {
          const newCoords = marker.getLatLng();
          this.points[index].coords = [newCoords.lat, newCoords.lng];
        });

        const index = this.points.length;
        this.points.push({
          name: display_name,
          coords,
          category: this.selectedCategory,
          marker
        });

        this.map.setView(coords, 13);

        // Reset form after adding point
        this.searchQuery = "";
        this.selectedCategory = "";
      } catch (e) {
        alert("Error adding point.");
      }
    },
    editPoint(index) {
      const point = this.points[index];
      this.searchQuery = point.name;
      this.selectedCategory = point.category;
      // Additional logic for editing can be added here
    },
    deletePoint(index) {
      const point = this.points[index];
      this.markerGroup.removeLayer(point.marker); // Remove marker from map
      this.points.splice(index, 1); // Remove point from list
    }
  }
};
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
}
.list-group-item.active {
  background-color: #0d6efd;
  color: white;
}
</style>