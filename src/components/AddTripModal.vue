<template>
  <div class="modal-overlay">
    <div class="modal-container">
      <div class="modal-header">
        <h3>Add New Trip</h3>
        <button @click="closeModal" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Country</label>
            <select v-model="newTrip.country" required class="form-control">
              <option value="" disabled>Select country</option>
              <option v-for="country in countries" :key="country" :value="country">
                {{ country }}
              </option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Trip Name</label>
            <input v-model="newTrip.name" type="text" required class="form-control" placeholder="My Awesome Trip">
          </div>

          <div class="date-row">
            <div class="form-group">
              <label>Departure Date</label>
              <input v-model="newTrip.departureDate" type="date" class="form-control">
            </div>
            <div class="form-group">
              <label>Return Date</label>
              <input v-model="newTrip.arrivalDate" type="date" class="form-control">
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" @click="closeModal" class="btn btn-cancel">
              Cancel
            </button>
            <button type="submit" class="btn btn-submit">
              Add Trip
            </button>
          </div>
        </form>
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

    const countries = ref([]);
    const userId = ref(null);

    onAuthStateChanged(auth, (user) => {
      userId.value = user?.uid;
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
      if (!userId.value) return;

      try {
        const docRef = await addDoc(collection(db, 'trips'), {
          ...newTrip.value,
          userId: userId.value,
          createdAt: new Date()
        });

        emit('add-trip', {
          id: docRef.id,
          ...newTrip.value
        });

        closeModal();
      } catch (error) {
        console.error('Error saving trip:', error);
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
      closeModal
    };
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.modal-header {
  padding: 20px;
  background: #42b883;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.form-control:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.date-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}

.btn-cancel:hover {
  background: #e9e9e9;
}

.btn-submit {
  background: #42b883;
  color: white;
  border: none;
}

.btn-submit:hover {
  background: #389d73;
}

select.form-control {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1em;
}
</style>