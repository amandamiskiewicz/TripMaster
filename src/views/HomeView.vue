<template>
  <div class="container-fluid py-4 py-md-5 px-3 px-md-5">
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-outline-danger" @click="logout">
        Log out
      </button>
    </div>

    <h1 class="text-center mb-4 display-4 fw-bold text-success">Trip Master</h1>

    <div v-if="trips.length === 0" class="text-center text-muted mt-5">
      <p class="fs-5">You don't have any trips yet 😢</p>
      <button class="btn btn-success px-4 py-2" @click="showAddTripModal">Add your first trip</button>
    </div>

    <div v-else class="row g-3 g-md-4 justify-content-center">
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="trip in trips" :key="trip.id">
        <TripCard
          :trip="trip"
          @delete-trip="deleteTrip"
          class="h-100"
        />
      </div>
    </div>
    
    <div class="d-flex justify-content-center mt-4">
      <button 
        class="btn btn-success px-4 py-2" 
        @click="showAddTripModal"
      >
        {{ trips.length > 0 ? 'Add new trip' : 'Add your first trip' }}
      </button>
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
      if (!userId.value) return;
      
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
        await deleteDoc(doc(db, 'trips', tripId));
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
        await signOut(auth);
        router.push('/');
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
.container-fluid {
  max-width: 1800px;
}

.btn-success {
  background-color: #42b883;
  border-color: #42b883;
  min-width: 200px;
}

.btn-success:hover {
  background-color: #358d73;
  border-color: #358d73;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: rgba(220, 53, 69, 0.1);
}
</style>