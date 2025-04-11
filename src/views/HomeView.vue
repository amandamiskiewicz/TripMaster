<template>
  <div class="container py-5">

    <h1 class="text-center mb-4 display-4 fw-bold text-green">Trip Master</h1>

    <div class="d-flex justify-content-center gap-3 mb-5 flex-wrap">
      <router-link to="/trips" class="btn btn-green">Trips</router-link>
      <router-link to="/diary" class="btn btn-green">Travel Diary</router-link>
      <router-link to="/account" class="btn btn-green">Konto użytkownika</router-link>
      <router-link to="/login" class="btn btn-green">Logowanie</router-link>
    </div>

    <div v-if="trips.length === 0" class="text-center text-muted mt-5">
      <p class="fs-5">Nie masz jeszcze żadnych podróży 😢</p>
      <button class="btn btn-green" @click="showAddTripModal">Dodaj swoją pierwszą podróż</button>
    </div>

    <div v-else class="row">
      <TripCard
        v-for="trip in trips"
        :key="trip.id"
        :trip="trip"
      />
    </div>

    <div v-if="trips.length > 0" class="d-flex justify-content-center mt-4">
      <button class="btn btn-green" @click="showAddTripModal">Dodaj nową podróż</button>
    </div>

    <AddTripModal v-if="isModalVisible" @close="closeModal" @add-trip="addTrip" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase'; 
import TripCard from '@/components/TripCard.vue';
import AddTripModal from '@/components/AddTripModal.vue';

export default {
  name: 'HomeView',
  components: { TripCard, AddTripModal },
  setup() {
    const trips = ref([]);
    const isModalVisible = ref(false);

    const loadTrips = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'trips'));
        trips.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Błąd podczas ładowania podróży:', error);
      }
    };

    const addTrip = (newTrip) => {
      trips.value.push(newTrip);
      closeModal(); 
    };

    const showAddTripModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    onMounted(loadTrips);

    return {
      trips,
      isModalVisible,
      showAddTripModal,
      closeModal,
      addTrip
    };
  }
};
</script>

<style scoped>

.container {
  max-width: 1000px;
}

.text-center {
  text-align: center;
}

.fs-5 {
  font-size: 1.25rem;
}

.text-muted {
  color: #6c757d;
}


.btn-green {
  background-color: #1e88e5 !important; 
  color: white !important;
  border: 1px solid #1e88e5 !important;
}

.btn-green:hover {
  background-color: #388e73 !important;
  border: 1px solid #388e73 !important;
}

.text-green {
  color: #42b883 !important;
}
</style>
