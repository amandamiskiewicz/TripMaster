<template>
  <div class="container">
    <h3>Punkty do zwiedzenia - {{ trip.name }}</h3>

    <!-- Formularz dodawania nowego punktu -->
    <div class="mb-3">
      <label for="newPoint" class="form-label">Nowy punkt do zwiedzenia</label>
      <input
        v-model="newPoint"
        type="text"
        id="newPoint"
        class="form-control"
        placeholder="Wpisz nazwę miejsca, które chcesz odwiedzić"
      />
      <button class="btn btn-primary mt-2" @click="addPoint">Dodaj punkt</button>
    </div>

    <!-- Lista dodanych punktów (opcjonalnie) -->
    <ul class="list-group mb-3">
      <li v-for="(point, index) in travelPoints" :key="index" class="list-group-item">
        {{ point.name }} ({{ point.lat.toFixed(4) }}, {{ point.lng.toFixed(4) }})
      </li>
    </ul>

    <!-- Mapa wyświetlająca punkty -->
    <div id="map" style="height: 400px;"></div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'TravelPoints',
  props: ['trip'],
  data() {
    return {
      // Lista punktów – każdy punkt posiada nazwę oraz współrzędne
      travelPoints: [
        // Przykładowe punkty, ewentualnie pusta lista
        // { name: 'Stare Miasto', lat: 52.2297, lng: 21.0122 }
      ],
      newPoint: '',
      map: null
    }
  },
  methods: {
    addPoint() {
      if (this.newPoint.trim()) {
        // Symulujemy współrzędne – w rzeczywistej aplikacji użyj geokodowania
        const lat = 52.2297 + Math.random() * 0.02 - 0.01
        const lng = 21.0122 + Math.random() * 0.02 - 0.01
        const point = {
          name: this.newPoint.trim(),
          lat,
          lng
        }
        this.travelPoints.push(point)
        this.addMarker(point)
        this.newPoint = ''
      }
    },
    addMarker(point) {
      if (this.map) {
        L.marker([point.lat, point.lng]).addTo(this.map)
          .bindPopup(point.name)
      }
    }
  },
  mounted() {
    // Inicjalizacja mapy, centrowanej na przykładowych współrzędnych (np. Warszawa)
    this.map = L.map('map').setView([52.2297, 21.0122], 13)
    
    // Dodanie warstwy kafelków z OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map)
    
    // Jeśli istnieją już punkty, dodajemy marker dla każdego z nich
    this.travelPoints.forEach(point => {
      this.addMarker(point)
    })
  }
}
</script>

<style scoped>
#map {
  margin-top: 1rem;
}
</style>
