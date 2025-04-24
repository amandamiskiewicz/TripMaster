<template>
  <div class="container-fluid py-4 px-3 px-md-5">
    <div class="row">
      <div class="col-12">
        <h2 class="mb-4 text-success">Your Travel Points</h2>

        <div class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="alert alert-success" v-if="successMessage">{{ successMessage }}</div>

        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="position-relative">
                  <input
                    v-model="searchQuery"
                    @input="fetchSuggestions"
                    @keydown.down.prevent="highlightNext"
                    @keydown.up.prevent="highlightPrev"
                    @keydown.enter.prevent="selectHighlighted"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Enter location name"
                  />
                  <ul v-if="suggestions.length" class="list-group position-absolute w-100 z-3 mt-1">
                    <li
                      v-for="(suggestion, index) in suggestions"
                      :key="index"
                      :class="['list-group-item', { 'bg-success text-white': index === highlightedIndex }]"
                      @click="selectSuggestion(suggestion)"
                      class="cursor-pointer"
                    >
                      {{ suggestion.display_name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <select v-model="selectedCategory" class="form-select form-select-lg">
                  <option value="" disabled>Select Category</option>
                  <option value="Attraction">Attraction</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div class="d-flex flex-wrap gap-2 mt-3">
              <button class="btn btn-success px-4 py-2" @click="addPoint">
                <i class="bi bi-plus-circle"></i> Add Point
              </button>
              <button class="btn btn-outline-success px-4 py-2" @click="centerToCurrentLocation">
                <i class="bi bi-geo-alt"></i> Use My Current Location
              </button>
            </div>
          </div>
        </div>

        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h4 class="text-success mb-3">Your Added Points:</h4>
            <div class="table-responsive">
              <table class="table table-hover">
                <tbody>
                  <tr v-for="(point, index) in points" :key="index">
                    <td>
                      <strong>{{ point.name }}</strong>
                      <div class="text-muted small">{{ point.category }}</div>
                      <div class="text-muted small">({{ point.coords[0].toFixed(4) }}, {{ point.coords[1].toFixed(4) }})</div>
                    </td>
                    <td class="text-end">
                      <button class="btn btn-outline-danger btn-sm" @click="deletePoint(index)">
                        <i class="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card shadow-sm">
          <div class="card-body p-0">
            <div id="map" style="height: 500px; min-height: 300px;" @click="handleMapClick"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

// Marker icons - updated to use green color scheme
const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default {
  name: "TravelPoints",
  props: {
    tripId: {
      type: String,
      required: true
    },
    countryCoords: {
      type: Array,
      default: () => [52.237049, 21.017532] // Default to Poland coordinates
    },
    initialZoom: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      map: null,
      markerGroup: null,
      userLocationMarker: null,
      tempMarker: null,
      searchQuery: "",
      selectedCategory: "",
      suggestions: [],
      highlightedIndex: -1,
      points: [],
      unsubscribe: null,
      errorMessage: "",
      successMessage: "",
      userCoords: null,
      isAddingFromMap: false
    };
  },
  mounted() {
    this.initMap();
    this.loadPoints();
    this.setupMapClickHandler();
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
      this.map = L.map("map").setView(this.countryCoords, this.initialZoom);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
      this.markerGroup = L.layerGroup().addTo(this.map);
    },

    setupMapClickHandler() {
      this.map.on('click', (e) => {
        if (!this.selectedCategory) {
          this.errorMessage = "Please select a category first";
          return;
        }

        if (this.tempMarker) {
          this.map.removeLayer(this.tempMarker);
        }

        this.tempMarker = L.marker(e.latlng, {
          icon: greenIcon,
          draggable: true
        }).addTo(this.map)
          .bindPopup("New point - " + this.selectedCategory)
          .openPopup();

        this.isAddingFromMap = true;
        this.userCoords = [e.latlng.lat, e.latlng.lng];
        this.reverseGeocode([e.latlng.lat, e.latlng.lng]);
      });
    },

    handleMapClick(e) {
      // This method is now handled by the setupMapClickHandler
    },

    async centerToCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.userCoords = [position.coords.latitude, position.coords.longitude];
            this.map.setView(this.userCoords, 13);
            
            if (this.userLocationMarker) {
              this.userLocationMarker.setLatLng(this.userCoords);
            } else {
              this.userLocationMarker = L.marker(this.userCoords, {
                icon: blueIcon,
                title: "Your Current Location"
              }).addTo(this.map);
            }
            
            this.reverseGeocode(this.userCoords);
          },
          (error) => {
            console.error("Geolocation error:", error);
            this.errorMessage = "Unable to retrieve your location: " + error.message;
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
      } else {
        this.errorMessage = "Geolocation is not supported by your browser";
      }
    },

    async reverseGeocode(coords) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords[0]}&lon=${coords[1]}`
        );
        const data = await response.json();
        if (data.display_name) {
          this.searchQuery = data.display_name;
        } else {
          this.searchQuery = `Point at ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`;
        }
      } catch (e) {
        console.error("Reverse geocoding failed:", e);
        this.searchQuery = `Point at ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`;
      }
    },

    async addPoint() {
      if (!this.selectedCategory) {
        this.errorMessage = "Please select a category first";
        return;
      }

      try {
        let coords;
        let name = this.searchQuery;

        if (this.isAddingFromMap && this.userCoords) {
          coords = this.userCoords;
          name = this.searchQuery || `Point at ${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`;
          
          if (this.tempMarker) {
            this.map.removeLayer(this.tempMarker);
            this.tempMarker = null;
          }
        } else if (this.searchQuery) {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${this.searchQuery}`
          );
          const data = await response.json();

          if (!data.length) {
            this.errorMessage = "Location not found.";
            return;
          }

          coords = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
          name = data[0].display_name;
        } else {
          this.errorMessage = "Please provide a location or click on the map";
          return;
        }

        const pointData = {
          name: name,
          category: this.selectedCategory,
          coords: coords,
          createdAt: new Date()
        };

        await addDoc(collection(db, 'trips', this.tripId, 'points'), pointData);
        
        this.searchQuery = "";
        this.selectedCategory = "";
        this.errorMessage = "";
        this.isAddingFromMap = false;
        this.successMessage = "Point added successfully!";
        setTimeout(() => this.successMessage = "", 3000);
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
            const marker = L.marker(data.coords, {
              draggable: false,
              icon: redIcon
            })
              .addTo(this.markerGroup)
              .bindPopup(`<b>${data.name}</b><br>${data.category}`);

            this.points.push({
              id: doc.id,
              ...data,
              marker
            });
          });

          if (this.points.length > 0) {
            const group = new L.featureGroup(this.points.map(p => p.marker));
            this.map.fitBounds(group.getBounds().pad(0.2));
          } else {
            this.map.setView(this.countryCoords, this.initialZoom);
          }
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
        this.successMessage = "Point deleted successfully!";
        setTimeout(() => this.successMessage = "", 3000);
      } catch (e) {
        console.error("Error deleting point:", e);
        this.errorMessage = "Failed to delete point";
      }
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
    }
  }
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

#map {
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: crosshair;
}

.alert {
  margin-bottom: 1rem;
}

.btn-success {
  background-color: #42b883;
  border-color: #42b883;
}

.btn-success:hover {
  background-color: #358d73;
  border-color: #358d73;
}

.btn-outline-success {
  color: #42b883;
  border-color: #42b883;
}

.btn-outline-success:hover {
  background-color: rgba(66, 184, 131, 0.1);
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: rgba(220, 53, 69, 0.1);
}

.card {
  border: none;
  border-radius: 12px;
}

.table-hover tbody tr:hover {
  background-color: rgba(66, 184, 131, 0.05);
}

.list-group-item.active {
  background-color: #42b883;
  border-color: #42b883;
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
</style>