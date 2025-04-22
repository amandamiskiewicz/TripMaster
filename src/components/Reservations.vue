<template>
  <div class="container py-4">
    <h3>Reservations - {{ trip.name }}</h3>

    <div class="mb-3">
      <input 
        v-model="newReservation.name" 
        placeholder="Reservation name (e.g. Flight to Paris)" 
        class="form-control mb-2" 
        required
      />
      <input 
        v-model="newReservation.link" 
        placeholder="Reservation link (optional)" 
        class="form-control mb-2" 
        type="url"
      />
      <button 
        class="btn btn-primary" 
        @click="addReservation" 
        :disabled="!newReservation.name.trim() || loading"
      >
        <span v-if="!loading">Add Reservation</span>
        <span v-else class="spinner-border spinner-border-sm"></span>
      </button>
      <p v-if="errorMessage" class="text-danger mt-2 mb-0">{{ errorMessage }}</p>
    </div>

    <div v-if="loading && !reservations.length" class="text-center my-4">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="reservations.length">
      <h4>Your Reservations</h4>
      <ul class="list-group">
        <li v-for="res in reservations" :key="res.id" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <strong>{{ res.name }}</strong>
              <div v-if="res.link" class="mt-1">
                <a :href="res.link" target="_blank" class="text-decoration-none">
                  Open Reservation Link
                </a>
              </div>
              <small class="text-muted d-block mt-1">
                Added: {{ formatDate(res.createdAt) }}
              </small>
            </div>
            <button 
              class="btn btn-sm btn-danger" 
              @click="deleteReservation(res.id)"
              :disabled="loading"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="!loading && !reservations.length" class="alert alert-info mt-3">
      No reservations added yet.
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

export default {
  name: 'Reservations',
  props: ['trip'],
  data() {
    return {
      newReservation: {
        name: '',
        link: ''
      },
      reservations: [],
      loading: false,
      errorMessage: '',
      unsubscribe: null
    };
  },
  created() {
    this.loadReservations();
  },
  beforeUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  },
  methods: {
    async loadReservations() {
      this.loading = true;
      try {
        this.unsubscribe = onSnapshot(
          collection(db, 'trips', this.trip.id, 'reservations'),
          (snapshot) => {
            this.reservations = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })).sort((a, b) => b.createdAt - a.createdAt);
            this.loading = false;
          },
          (error) => {
            console.error("Error loading reservations:", error);
            this.errorMessage = "Failed to load reservations";
            this.loading = false;
          }
        );
      } catch (error) {
        console.error("Error:", error);
        this.errorMessage = "Failed to load reservations";
        this.loading = false;
      }
    },

    async addReservation() {
      if (!this.newReservation.name.trim()) {
        this.errorMessage = "Please enter a reservation name";
        return;
      }

      this.loading = true;
      this.errorMessage = '';

      try {
        await addDoc(collection(db, 'trips', this.trip.id, 'reservations'), {
          name: this.newReservation.name.trim(),
          link: this.newReservation.link.trim() || null,
          createdAt: new Date()
        });

        // Reset form
        this.newReservation = { name: '', link: '' };
      } catch (error) {
        console.error("Error adding reservation:", error);
        this.errorMessage = "Failed to add reservation: " + error.message;
      } finally {
        this.loading = false;
      }
    },

    async deleteReservation(id) {
      if (!confirm('Are you sure you want to delete this reservation?')) return;
      
      this.loading = true;
      try {
        await deleteDoc(doc(db, 'trips', this.trip.id, 'reservations', id));
      } catch (error) {
        console.error("Error deleting reservation:", error);
        this.errorMessage = "Failed to delete reservation";
      } finally {
        this.loading = false;
      }
    },

    formatDate(timestamp) {
      if (!timestamp) return '';
      const date = timestamp.toDate();
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
  }
};
</script>

<style scoped>
.list-group-item {
  transition: all 0.2s;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}

.spinner-border {
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
}

.alert {
  max-width: 600px;
  margin: 0 auto;
}
</style>