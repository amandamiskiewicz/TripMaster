<template>
  <div class="trip-details container-fluid py-4 py-md-5 px-3 px-md-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <router-link to="/home" class="btn btn-outline-success">
        <i class="fas fa-arrow-left me-2"></i>Back to Trips
      </router-link>
    </div>

    <div class="card shadow-sm mb-5">
      <div class="card-body p-4 p-md-5">
        <h2 class="text-success mb-4">{{ trip ? trip.name : 'Loading...' }}</h2>
        
        <div class="trip-info row">
          <div class="col-md-6">
            <p><strong><i class="fas fa-map-marker-alt text-success me-2"></i>Country:</strong> {{ trip?.country || 'No data' }}</p>
            <p><strong><i class="far fa-calendar-alt text-success me-2"></i>Departure:</strong> {{ formatDate(trip?.departureDate) }}</p>
            <p><strong><i class="far fa-calendar-alt text-success me-2"></i>Arrival:</strong> {{ formatDate(trip?.arrivalDate) }}</p>
          </div>
        </div>

        <div class="trip-actions d-flex flex-wrap gap-2 mt-4">
          <button @click="activateSection('travelPoints')" class="btn btn-success">
            <i class="fas fa-map-marked-alt me-2"></i>Travel Points
          </button>
          <button @click="activateSection('budget')" class="btn btn-success">
            <i class="fas fa-wallet me-2"></i>Budget
          </button>
          <button @click="activateSection('packingList')" class="btn btn-success">
            <i class="fas fa-suitcase me-2"></i>Packing List
          </button>
          <button @click="activateSection('reservations')" class="btn btn-success">
            <i class="fas fa-hotel me-2"></i>Reservations
          </button>
          <button @click="activateSection('travelDiary')" class="btn btn-success">
            <i class="fas fa-book me-2"></i>Travel Diary
          </button>
        </div>
      </div>
    </div>

    <div v-if="activeSection === 'travelPoints'" class="card shadow-sm mb-5">
      <TravelPoints :tripId="trip?.id" @close="closeSection" />
    </div>

    <div v-if="activeSection === 'budget'" class="card shadow-sm mb-5">
      <Budget :trip="trip" @close="closeSection" />
    </div>

    <div v-if="activeSection === 'packingList'" class="card shadow-sm mb-5">
      <PackingList :trip="trip" @close="closeSection" />
    </div>

    <div v-if="activeSection === 'reservations'" class="card shadow-sm mb-5">
      <Reservations :trip="trip" @close="closeSection" />
    </div>

    <div v-if="activeSection === 'travelDiary'" class="card shadow-sm mb-5">
      <TravelDiary :trip="trip" @close="closeSection" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import TravelPoints from '@/components/TravelPoints.vue';
import Budget from '@/components/Budget.vue';
import PackingList from '@/components/PackingList.vue';
import Reservations from '@/components/Reservations.vue';
import TravelDiary from '@/components/TravelDiary.vue';

export default {
  name: 'TripDetails',
  components: {
    TravelPoints,
    Budget,
    PackingList,
    Reservations,
    TravelDiary
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const trip = ref(null);
    const activeSection = ref(null);

    const formatDate = (dateString) => {
      if (!dateString) return 'No data';
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const loadTrip = async () => {
      try {
        const tripRef = doc(db, 'trips', props.id);
        const tripDoc = await getDoc(tripRef);
        if (tripDoc.exists()) {
          trip.value = { id: tripDoc.id, ...tripDoc.data() };
        }
      } catch (error) {
        console.error("Error loading trip:", error);
      }
    };

    const activateSection = (section) => {
      activeSection.value = activeSection.value === section ? null : section;
    };

    const closeSection = () => {
      activeSection.value = null;
    };

    onMounted(loadTrip);
    watch(() => props.id, loadTrip);

    return {
      trip,
      activeSection,
      formatDate,
      activateSection,
      closeSection
    };
  }
};
</script>

<style scoped>
.trip-details {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  border: none;
  border-radius: 0.75rem;
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

.trip-actions .btn {
  flex: 1 1 auto;
  min-width: 150px;
}

@media (max-width: 768px) {
  .trip-actions .btn {
    flex: 1 1 100%;
  }
  
  .trip-details {
    padding: 1.5rem !important;
  }
}
</style>