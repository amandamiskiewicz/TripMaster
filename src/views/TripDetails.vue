<template>
  <div class="container py-5">
    <!-- Przycisk powrotu do strony głównej -->
    <router-link to="/" class="btn btn-outline-secondary mb-3">Powrót</router-link>
    
    <h2>{{ trip.name }} - Szczegóły</h2>
    <p><strong>Kraj:</strong> {{ trip.country }}</p>
    <p><strong>Data wyjazdu:</strong> {{ trip.departureDate || 'Brak danych' }}</p>
    <p><strong>Data przyjazdu:</strong> {{ trip.arrivalDate || 'Brak danych' }}</p>

    <!-- Przycisk do przejścia do różnych sekcji -->
    <div class="d-flex gap-3 my-4">
      <button class="btn btn-primary" @click="addTravelPoints">Dodaj punkty podróży</button>
      <button class="btn btn-primary" @click="planBudget">Planowanie budżetu</button>
      <button class="btn btn-primary" @click="addPackingList">Dodaj do listy pakowania</button>
      <button class="btn btn-primary" @click="addReservations">Rezerwacje</button>
    </div>

    <!-- Przełączanie między sekcjami -->
    <div v-if="isTravelPointsVisible">
      <TravelPoints :trip="trip" @close="closeSection" />
    </div>

    <div v-if="isBudgetVisible">
      <Budget :trip="trip" @close="closeSection" />
    </div>

    <div v-if="isPackingListVisible">
      <PackingList :trip="trip" @close="closeSection" />
    </div>

    <div v-if="isReservationsVisible">
      <Reservations :trip="trip" @close="closeSection" />
    </div>
  </div>
</template>

<script>
// Importowanie komponentów
import TravelPoints from '@/components/TravelPoints.vue'
import Budget from '@/components/Budget.vue'
import PackingList from '@/components/PackingList.vue'
import Reservations from '@/components/Reservations.vue'

export default {
  name: 'TripDetails',
  components: {
    TravelPoints,
    Budget,
    PackingList,
    Reservations
  },
  props: ['id'],
  data() {
    return {
      trip: {
        id: this.id,
        name: 'Przykładowa podróż',
        country: 'Hiszpania',
        departureDate: '2025-06-01',
        arrivalDate: '2025-06-15'
      },
      isTravelPointsVisible: false,
      isBudgetVisible: false,
      isPackingListVisible: false,
      isReservationsVisible: false
    }
  },
  methods: {
    // Przełączanie widoków
    addTravelPoints() {
      this.isTravelPointsVisible = true;
      this.isBudgetVisible = false;
      this.isPackingListVisible = false;
      this.isReservationsVisible = false;
    },
    planBudget() {
      this.isTravelPointsVisible = false;
      this.isBudgetVisible = true;
      this.isPackingListVisible = false;
      this.isReservationsVisible = false;
    },
    addPackingList() {
      this.isTravelPointsVisible = false;
      this.isBudgetVisible = false;
      this.isPackingListVisible = true;
      this.isReservationsVisible = false;
    },
    addReservations() {
      this.isTravelPointsVisible = false;
      this.isBudgetVisible = false;
      this.isPackingListVisible = false;
      this.isReservationsVisible = true;
    },
    closeSection() {
      this.isTravelPointsVisible = false;
      this.isBudgetVisible = false;
      this.isPackingListVisible = false;
      this.isReservationsVisible = false;
    }
  }
}
</script>

<style scoped>
/* Możesz dodać własne style */
</style>
