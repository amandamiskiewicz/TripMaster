<template>
  <div class="container">
    <h3>Punkty podróży: {{ trip.name }}</h3>

    <!-- Pole wyszukiwania punktów podróży -->
    <div class="mb-3">
      <label for="searchPoint" class="form-label">Wyszukaj punkt podróży</label>
      <input
        v-model="searchQuery"
        type="text"
        id="searchPoint"
        class="form-control"
        placeholder="Wpisz nazwę punktu..."
        @input="filterPoints"
      />
    </div>

    <!-- Wyświetlanie sugerowanych punktów -->
    <ul v-if="filteredPoints.length > 0" class="list-group mt-3">
      <li
        v-for="(point, index) in filteredPoints"
        :key="index"
        class="list-group-item"
        @click="selectPoint(point)"
      >
        {{ point }}
      </li>
    </ul>

    <!-- Formularz do dodawania nowych punktów podróży -->
    <form v-if="!searchQuery" @submit.prevent="addPoint">
      <div class="mb-3">
        <label for="newPoint" class="form-label">Nowy punkt podróży</label>
        <input v-model="newPoint" type="text" id="newPoint" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Dodaj punkt</button>
    </form>

    <!-- Lista zapisanych punktów -->
    <ul class="list-group mt-3" v-if="travelPoints.length > 0">
      <li v-for="(point, index) in travelPoints" :key="index" class="list-group-item">
        {{ point }}
      </li>
    </ul>

    <!-- Przycisk do zamknięcia sekcji -->
    <button class="btn btn-secondary mt-3" @click="$emit('close')">Zamknij</button>
  </div>
</template>

<script>
export default {
  name: 'TravelPoints',
  props: ['trip'],
  data() {
    return {
      searchQuery: '',
      filteredPoints: [], // Lista filtrowanych punktów na podstawie wyszukiwania
      travelPoints: ['Punkt A', 'Punkt B', 'Punkt C', 'Punkt D'], // Przykładowe punkty
      newPoint: ''
    };
  },
  methods: {
    // Filtrujemy punkty podróży na podstawie wpisywanego tekstu
    filterPoints() {
      if (this.searchQuery) {
        this.filteredPoints = this.travelPoints.filter((point) =>
          point.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.filteredPoints = [];
      }
    },

    // Dodajemy nowy punkt
    addPoint() {
      if (this.newPoint) {
        this.travelPoints.push(this.newPoint);
        this.newPoint = '';
      }
    },

    // Wybieramy punkt z listy sugerowanych punktów
    selectPoint(point) {
      this.newPoint = point;
      this.filteredPoints = [];
    }
  }
}
</script>
