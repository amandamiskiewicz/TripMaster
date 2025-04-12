<template>
  <div class="container py-5">
    <router-link to="/home" class="btn btn-outline-secondary mb-3">Back</router-link>
    
    <h2>{{ trip ? trip.name : 'Loading...' }} - Details</h2>
    <p><strong>Country:</strong> {{ trip ? trip.country : 'No data' }}</p>
    <p><strong>Departure Date:</strong> {{ trip ? trip.departureDate : 'No data' }}</p>
    <p><strong>Arrival Date:</strong> {{ trip ? trip.arrivalDate : 'No data' }}</p>

    <div class="d-flex gap-3 my-4">
      <button class="btn btn-green" @click="addTravelPoints">Add Travel Points</button>
      <button class="btn btn-green" @click="planBudget">Budget Planning</button>
      <button class="btn btn-green" @click="addPackingList">Add to Packing List</button>
      <button class="btn btn-green" @click="addReservations">Reservations</button>
      <button class="btn btn-green" @click="addTravelDiary">Travel Diary</button>
    </div>

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

    <div v-if="isTravelDiaryVisible">
      <TravelDiary :trip="trip" @close="closeSection" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../firebase'; 
import { doc, getDoc } from 'firebase/firestore'; 
import TravelPoints from '@/components/TravelPoints.vue'
import Budget from '@/components/Budget.vue'
import PackingList from '@/components/PackingList.vue'
import Reservations from '@/components/Reservations.vue'
import TravelDiary from '@/components/TravelDiary.vue'  // Importing new component

export default {
  name: 'TripDetails',
  components: {
    TravelPoints,
    Budget,
    PackingList,
    Reservations,
    TravelDiary  // Adding new component
  },
  props: ['id'], 
  setup(props) {
    const trip = ref(null); 
    const isTravelPointsVisible = ref(false);
    const isBudgetVisible = ref(false);
    const isPackingListVisible = ref(false);
    const isReservationsVisible = ref(false);
    const isTravelDiaryVisible = ref(false);  // State for Travel Diary

    const loadTrip = async () => {
      try {
        const tripRef = doc(db, 'trips', props.id); 
        const tripDoc = await getDoc(tripRef); 

        if (tripDoc.exists()) {
          trip.value = tripDoc.data(); 
        } else {
          console.log('No trip found with this ID');
        }
      } catch (error) {
        console.error("Error loading trip:", error);
      }
    };

    onMounted(() => {
      loadTrip();
    });

    const addTravelPoints = () => {
      isTravelPointsVisible.value = true;
      isBudgetVisible.value = false;
      isPackingListVisible.value = false;
      isReservationsVisible.value = false;
      isTravelDiaryVisible.value = false;
    };

    const planBudget = () => {
      isTravelPointsVisible.value = false;
      isBudgetVisible.value = true;
      isPackingListVisible.value = false;
      isReservationsVisible.value = false;
      isTravelDiaryVisible.value = false;
    };

    const addPackingList = () => {
      isTravelPointsVisible.value = false;
      isBudgetVisible.value = false;
      isPackingListVisible.value = true;
      isReservationsVisible.value = false;
      isTravelDiaryVisible.value = false;
    };

    const addReservations = () => {
      isTravelPointsVisible.value = false;
      isBudgetVisible.value = false;
      isPackingListVisible.value = false;
      isReservationsVisible.value = true;
      isTravelDiaryVisible.value = false;
    };

    const addTravelDiary = () => {
      isTravelPointsVisible.value = false;
      isBudgetVisible.value = false;
      isPackingListVisible.value = false;
      isReservationsVisible.value = false;
      isTravelDiaryVisible.value = true;  // Show Travel Diary
    };

    const closeSection = () => {
      isTravelPointsVisible.value = false;
      isBudgetVisible.value = false;
      isPackingListVisible.value = false;
      isReservationsVisible.value = false;
      isTravelDiaryVisible.value = false;
    };

    return {
      trip,
      isTravelPointsVisible,
      isBudgetVisible,
      isPackingListVisible,
      isReservationsVisible,
      isTravelDiaryVisible,
      addTravelPoints,
      planBudget,
      addPackingList,
      addReservations,
      addTravelDiary,  // Adding method for Travel Diary
      closeSection
    };
  }
}
</script>

<style scoped>
.container {
  max-width: 960px; 
  margin: 0 auto;
}

.modal-content {
  max-width: 500px;
  margin: auto;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

strong {
  color: #333;
}

.d-flex {
  gap: 10px;
}

.btn-green {
  background-color: #1e88e5; 
  border-color: #1e88e5;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: white;
}

.btn-green:hover {
  background-color: #388e73; 
  border-color: #388e73;
}

.error {
  color: red;
  font-size: 1rem;
  margin-top: 10px;
}

button {
  font-size: 1rem;
  padding: 10px 15px;
}

button:focus {
  outline: none;
  box-shadow: none;
}

section {
  margin-top: 20px;
}

section h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #555;
}

section p {
  font-size: 1.1rem;
  color: #777;
}

section .btn-green {
  margin-right: 10px;
}

@media (max-width: 767px) {
  .container {
    padding: 20px;
  }

  h2 {
    font-size: 1.5rem;
  }

  .btn-green {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
}
</style>
