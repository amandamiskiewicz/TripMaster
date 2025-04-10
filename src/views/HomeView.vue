<template>
  <div class="container py-5">
    <h1 class="text-center mb-4 display-4 fw-bold text-primary">Trip Master</h1>

    <div class="d-flex justify-content-center gap-3 mb-5 flex-wrap">
      <button class="btn btn-outline-primary">Trips</button>
      <button class="btn btn-outline-primary">Budget</button>
      <button class="btn btn-outline-primary">Packing Lists</button>
      <button class="btn btn-outline-primary">Travel Diary</button>
    </div>

    <!-- Lista podróży -->
    <div v-if="trips.length === 0" class="text-center text-muted mt-5">
      <p class="fs-5">Nie masz jeszcze żadnych podróży 😢</p>
      <button class="btn btn-primary" @click="showAddTripModal">Dodaj swoją pierwszą podróż</button>
    </div>

    <div v-else class="row">
      <TripCard
        v-for="trip in trips"
        :key="trip.id"
        :trip="trip"
      />
    </div>

    <!-- Modal Dodania podróży -->
    <AddTripModal v-if="isModalVisible" @close="closeModal" @add-trip="addTrip" />
  </div>
</template>

<script>
import TripCard from '@/components/TripCard.vue'
import AddTripModal from '@/components/AddTripModal.vue'

export default {
  name: 'HomeView',
  components: { TripCard, AddTripModal },
  data() {
    return {
      trips: [],
      isModalVisible: false
    }
  },
  methods: {
    showAddTripModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addTrip(newTrip) {
      this.trips.push(newTrip); 
      this.closeModal();
    }
  }
}
</script>
