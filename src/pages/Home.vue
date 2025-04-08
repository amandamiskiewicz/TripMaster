<template>
  <div class="home">
    <h1>Welcome to Trip Master!</h1>

    <div v-if="errorMessage" class="error">
      <!-- wyświetla error z konsoli mozna potem usunac -->
      <p>{{ errorMessage }}</p>
    </div>

    <div>
      <h2>Your Trips</h2>
      <ul>
        <li v-for="trip in trips" :key="trip.id">
          <strong>{{ trip.name }}</strong> - {{ formatDate(trip.date) }}
        </li>
      </ul>
    </div>

    <div>
      <h2>Create a New Trip</h2>
      <form @submit.prevent="addTrip">
        <div>
          <label for="tripName">Trip Name:</label>
          <input type="text" v-model="tripName" id="tripName" required />
        </div>
        <div>
          <label for="tripDate">Trip Date:</label>
          <input type="date" v-model="tripDate" id="tripDate" required />
        </div>
        <button type="submit">Add Trip</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';

export default {
  setup() {
    const tripName = ref('');
    const tripDate = ref('');
    const trips = ref([]);
    const errorMessage = ref('');

    const loadTrips = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'trips'));
        trips.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        errorMessage.value = 'Error loading trips: ' + error.message;
        console.error(error); // błąd z konsoli
      }
    };

    const addTrip = async () => {
      if (tripName.value && tripDate.value) {
        try {
          await addDoc(collection(db, 'trips'), {
            name: tripName.value,
            date: new Date(tripDate.value), 
          });
          loadTrips(); 
          tripName.value = '';
          tripDate.value = '';
        } catch (error) {
          errorMessage.value = 'Error adding trip: ' + error.message;
          console.error(error);
        }
      }
    };

    const formatDate = (timestamp) => {
      if (timestamp && timestamp.toDate) {
        const date = timestamp.toDate();
        return date.toLocaleDateString(); 
      }
      return ''; 
    };

    onMounted(loadTrips);

    return {
      tripName,
      tripDate,
      trips,
      addTrip,
      errorMessage,
      formatDate,
    };
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
