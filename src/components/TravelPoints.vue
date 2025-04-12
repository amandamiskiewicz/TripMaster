<template>
  <div class="container">
    <h3>Punkty do zwiedzenia - {{ trip.name }}</h3>

    <div class="mb-3">
      <label for="newPoint" class="form-label">Nowy punkt do zwiedzenia</label>
      <input
        v-model="newPoint"
        type="text"
        id="newPoint"
        class="form-control"
        placeholder="Wpisz nazwę miejsca, które chcesz odwiedzić"
        @input="searchPlaces"
      />

      <ul v-if="suggestions.length > 0" class="list-group">
        <li
          v-for="(suggestion, index) in suggestions"
          :key="index"
          class="list-group-item"
          @click="selectPlace(suggestion)"
        >
          {{ suggestion.display_name }}
        </li>
      </ul>

      <button class="btn btn-primary mt-2" @click="addPoint">Dodaj punkt</button>
    </div>

    <div v-if="travelPoints.length" class="mb-3">
      <h4>Punkty:</h4>
      <ul class="list-group">
        <li v-for="(point, index) in travelPoints" :key="index" class="list-group-item">
          {{ point.name }} ({{ point.lat.toFixed(4) }}, {{ point.lng.toFixed(4) }})
        </li>
      </ul>
    </div>

    <div id="map" style="height: 400px;"></div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import axios from 'axios'
import { debounce } from 'lodash'
import { db } from '@/firebase'

export default {
  name: 'TravelPoints',
  props: ['trip'],
  data() {
    return {
      travelPoints: [],
      newPoint: '',
      suggestions: [],
      map: null,
      marker: null
    }
  },
  methods: {
    searchPlaces: debounce(async function() {
      if (this.newPoint.trim().length > 2) {
        try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
            params: {
              q: this.newPoint,
              format: 'json',
              addressdetails: 1,
              limit: 5
            }
          })
          this.suggestions = response.data || []
        } catch (error) {
          console.error("Błąd podczas wyszukiwania miejsc:", error)
        }
      } else {
        this.suggestions = []
      }
    }, 500),  

    selectPlace(suggestion) {
      this.newPoint = suggestion.display_name
      this.suggestions = []
      const lat = parseFloat(suggestion.lat)
      const lng = parseFloat(suggestion.lon)
      this.addMarker(lat, lng)
    },

    // Dodanie punktu
    addPoint() {
      if (this.newPoint.trim() && this.marker) {
        const point = {
          name: this.newPoint.trim(),
          lat: this.marker.getLatLng().lat,
          lng: this.marker.getLatLng().lng
        }

        this.travelPoints.push(point)
        this.addMarker(point.lat, point.lng)

        this.savePointToFirebase(point)

        this.newPoint = ''
      }
    },

    addMarker(lat, lng) {
      if (!this.map) return

      const pinIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41]
      })

      if (this.marker) {
        this.marker.setLatLng([lat, lng])
      } else {
        this.marker = L.marker([lat, lng], { icon: pinIcon }).addTo(this.map)
      }

      this.map.setView([lat, lng], 13)
    },

    async savePointToFirebase(point) {
      const tripRef = db.collection('trips').doc(this.trip.id)
      await tripRef.collection('points').add({
        name: point.name,
        lat: point.lat,
        lng: point.lng
      })
    },

    async fetchTravelPoints() {
      const tripRef = db.collection('trips').doc(this.trip.id)
      const snapshot = await tripRef.collection('points').get()
      snapshot.forEach(doc => {
        const point = doc.data()
        this.travelPoints.push({
          name: point.name,
          lat: point.lat,
          lng: point.lng
        })
        this.addMarker(point.lat, point.lng)
      })
    }
  },
  mounted() {
    this.map = L.map('map').setView([52.2297, 21.0122], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map)

    this.fetchTravelPoints()
  }
}
</script>

<style scoped>
#map {
  margin-top: 1rem;
}

ul {
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 10;
}

.error {
  color: red;
}
</style>
