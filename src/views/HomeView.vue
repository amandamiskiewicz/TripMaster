<template>
  <div class="container py-5">
    <button class="btn btn-danger" @click="logout">
      Log out
    </button>
    <h1 class="text-center mb-4 display-4 fw-bold text-green">Trip Master</h1>

    <div v-if="trips.length === 0" class="text-center text-muted mt-5">
      <p class="fs-5">You don't have any trips yet 😢</p>
      <button class="btn btn-green" @click="showAddTripModal">Add your first trip</button>
    </div>

    <div v-else class="row">
      <TripCard
        v-for="trip in trips"
        :key="trip.id"
        :trip="trip"
        @delete-trip="deleteTrip"
      />
    </div>
    

    <div v-if="trips.length > 0" class="d-flex justify-content-center mt-4">
      <button class="btn btn-green" @click="showAddTripModal">Add new trip</button>
    </div>

    <AddTripModal v-if="isModalVisible" @close="closeModal" @add-trip="addTrip" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs, query, where, doc, deleteDoc} from 'firebase/firestore';
import { db, auth } from '@/firebase'; 
import TripCard from '@/components/TripCard.vue';
import AddTripModal from '@/components/AddTripModal.vue';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
export default {
  name: 'HomeView',
  components: { TripCard, AddTripModal },
  setup() {
    const trips = ref([]);
    const isModalVisible = ref(false);
    const userId = ref(null);
    const router = useRouter();

    const loadTrips = async () => {
      if (!userId.value) {
        return; 
      }
      
      try {
        const q = query(collection(db, 'trips'), where('userId', '==', userId.value));
        const querySnapshot = await getDocs(q);

        trips.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Error loading trips:', error);
      }
    };

    const deleteTrip = async (tripId) => {
      try {
        // Usunięcie z bazy danych
        const tripDocRef = doc(db, 'trips', tripId);
        await deleteDoc(tripDocRef);

        // Usunięcie z lokalnego stanu (widoku)
        trips.value = trips.value.filter(trip => trip.id !== tripId);
      } catch (error) {
        console.error('Error deleting trip:', error);
      }
    };



    const addTrip = (newTrip) => {
      trips.value.push(newTrip);
      closeModal(); 
    };

    const logout = async () => {
      try {
        await signOut(auth); // Wylogowanie z Firebase
        console.log('User logged out');
        router.push('/'); // Przekierowanie na stronę startową
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };



    const showAddTripModal = () => {
      isModalVisible.value = true;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        userId.value = user.uid; 
        loadTrips(); 
      } else {
        userId.value = null; 
        trips.value = []; 
      }
    });

    onMounted(loadTrips); 

    return {
      trips,
      isModalVisible,
      showAddTripModal,
      closeModal,
      addTrip,
      deleteTrip,
      logout
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