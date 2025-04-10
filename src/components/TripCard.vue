<template>
  <div class="col-md-4 mb-4">
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <h5 class="card-title">{{ trip.name }}</h5>
        <p class="card-text">{{ trip.country }}</p>
        <router-link :to="`/trip/${trip.id}`" class="btn btn-primary">Zobacz podróż</router-link>
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
  }
}
</script>
