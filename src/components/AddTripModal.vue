<template>
  <div class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5)">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Trip</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="country" class="form-label">Country</label>
              <select v-model="newTrip.country" id="country" class="form-select" required>
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Trip Name</label>
              <input v-model="newTrip.name" type="text" id="name" class="form-control" required />
            </div>
            <div class="mb-3">
              <label for="departureDate" class="form-label">Departure Date (optional)</label>
              <input v-model="newTrip.departureDate" type="date" id="departureDate" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="arrivalDate" class="form-label">Arrival Date (optional)</label>
              <input v-model="newTrip.arrivalDate" type="date" id="arrivalDate" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Add Trip</button>
          </form>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db, auth } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'AddTripModal',
  setup(_, { emit }) {
    const newTrip = ref({
      country: '',
      name: '',
      departureDate: '',
      arrivalDate: ''
    });

    const errorMessage = ref('');
    const countries = ref([]);
    const userId = ref(null);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        userId.value = user.uid;
      } else {
        errorMessage.value = 'You must be logged in to add a trip.';
      }
    });

    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        countries.value = data.map(country => country.name.common).sort();
      } catch (error) {
        console.error("Error loading countries:", error);
      }
    };

    const submitForm = async () => {
      if (!userId.value) {
        errorMessage.value = 'You must be logged in to add a trip.';
        return;
      }

      try {
        const docRef = await addDoc(collection(db, 'trips'), {
          ...newTrip.value,
          userId: userId.value,
          createdAt: new Date()
        });

        emit('add-trip', {
          id: docRef.id,
          ...newTrip.value,
          userId: userId.value,
          createdAt: new Date()
        });

        closeModal();
      } catch (error) {
        errorMessage.value = 'Error saving to database: ' + error.message;
      }
    };

    const closeModal = () => {
      emit('close');
    };

    onMounted(fetchCountries);

    return {
      newTrip,
      countries,
      submitForm,
      closeModal,
      errorMessage
    };
  }
};
</script>

<style scoped>
.modal-content {
  max-width: 500px;
  margin: auto;
}

.error {
  color: red;
}
</style>
