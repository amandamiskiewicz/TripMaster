<template>
  <div class="col-md-4 mb-4">
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <h5 class="card-title">{{ trip.name }}</h5>
        <p class="card-text">{{ trip.country }}</p>
        <router-link :to="`/trip/${trip.id}`" class="btn btn-green">View Trip</router-link>
        
        <!-- Przycisk do usunięcia wydarzenia -->
        <button class="btn btn-danger mt-3" @click="deleteTrip">Delete Trip</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TripCard',
  props: {
    trip: {
      type: Object,
      required: true
    }
  },
  emits: ['delete-trip'],
  methods: {
    deleteTrip() {
      this.$emit('delete-trip', this.trip.id); // Wywołanie emitowania zdarzenia do rodzica
    }
  }
};
</script>

<style scoped>
.btn-green {
  background-color: #42b883 !important; 
  color: white !important;
  border: 1px solid #42b883 !important;
}

.btn-green:hover {
  background-color: #388e73 !important;
  border: 1px solid #388e73 !important;
}

.btn-danger {
  background-color: #dc3545 !important;
  color: white !important;
  border: 1px solid #dc3545 !important;
}

.btn-danger:hover {
  background-color: #c82333 !important;
  border: 1px solid #c82333 !important;
}
</style>
