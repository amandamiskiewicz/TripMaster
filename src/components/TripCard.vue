<template>
  <div class="trip-card-wrapper">
    <div class="card shadow-sm h-100">
      <div class="card-body d-flex flex-column">
        <div class="card-content">
          <h5 class="card-title text-truncate">{{ trip.name }}</h5>
          <p class="card-text text-muted mb-3">
            <i class="fas fa-map-marker-alt me-2"></i>{{ trip.country }}
          </p>
          <p v-if="trip.startDate" class="card-text small text-muted">
            <i class="far fa-calendar-alt me-2"></i>
            {{ formatDate(trip.startDate) }} - {{ formatDate(trip.endDate) }}
          </p>
        </div>
        
        <div class="card-actions mt-auto">
          <router-link 
            :to="`/trip/${trip.id}`" 
            class="btn btn-success w-100 mb-2"
          >
            <i class="fas fa-eye me-2"></i>View Details
          </router-link>
          
          <button 
            class="btn btn-outline-danger w-100" 
            @click.stop="deleteTrip"
          >
            <i class="fas fa-trash-alt me-2"></i>Delete
          </button>
        </div>
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
      if (confirm('Are you sure you want to delete this trip?')) {
        this.$emit('delete-trip', this.trip.id);
      }
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.trip-card-wrapper {
  padding: 0.5rem;
}

.card {
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.btn-success {
  background-color: #42b883;
  border-color: #42b883;
  padding: 0.5rem 1rem;
}

.btn-success:hover {
  background-color: #358d73;
  border-color: #358d73;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
  padding: 0.5rem 1rem;
}

.btn-outline-danger:hover {
  background-color: rgba(220, 53, 69, 0.1);
}

@media (max-width: 576px) {
  .card-body {
    padding: 1.25rem;
  }
}
</style>