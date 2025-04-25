<template>
  <div class="container-fluid p-3 p-md-5 reservations-container">
    <div class="header d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
      <h2 class="text-success mb-3 mb-md-0">Reservations - {{ trip.name }}</h2>
      <button @click="$emit('close')" class="btn btn-outline-success">
        <i class="fas fa-arrow-left me-2"></i>Back
      </button>
    </div>

    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h3 class="card-title text-success mb-4">Add New Reservation</h3>
        
        <div class="mb-3">
          <input 
            v-model="newReservation.name" 
            placeholder="Reservation name (e.g. Flight to Paris)" 
            class="form-control"
            required
          />
        </div>
        
        <div class="mb-3">
          <input 
            v-model="newReservation.link" 
            placeholder="Reservation link (optional)" 
            class="form-control"
            type="url"
          />
        </div>
        
        <div class="mb-3">
          <label class="btn btn-outline-success w-100">
            <i class="fas fa-paperclip me-2"></i>Attach File
            <input 
              type="file" 
              @change="handleFileUpload" 
              class="d-none"
            />
          </label>
          <div v-if="newReservation.file" class="d-flex align-items-center mt-2">
            <span class="text-truncate me-2">{{ newReservation.file.name }}</span>
            <button @click="removeFile" class="btn btn-sm btn-outline-danger">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        
        <button 
          @click="addReservation" 
          class="btn btn-success w-100"
          :disabled="!newReservation.name.trim() || loading"
        >
          <span v-if="!loading">Add Reservation</span>
          <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </button>
        
        <div v-if="errorMessage" class="alert alert-danger mt-3 mb-0">
          {{ errorMessage }}
        </div>
      </div>
    </div>

    <div v-if="loading && !reservations.length" class="text-center py-4">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="reservations.length" class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title text-success mb-4">Your Reservations</h3>
        <div class="card mb-3" v-for="res in reservations" :key="res.id">
          <div class="card-body d-flex justify-content-between">
            <div class="flex-grow-1">
              <h4 class="text-success">{{ res.name }}</h4>
              <div v-if="res.link" class="mb-2">
                <a :href="res.link" target="_blank" class="btn btn-sm btn-outline-success">
                  <i class="fas fa-external-link-alt me-2"></i>Open Link
                </a>
              </div>
              <div v-if="res.fileUrl" class="mb-2">
                <a :href="res.fileUrl" target="_blank" class="btn btn-sm btn-outline-success">
                  <i class="fas fa-file-download me-2"></i>Download Attachment
                </a>
              </div>
              <div class="text-muted small">
                Added on {{ formatDate(res.createdAt) }}
              </div>
            </div>
            <button @click="deleteReservation(res.id)" class="btn btn-outline-danger ms-3 align-self-start">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!loading && !reservations.length" class="card shadow-sm text-center py-5">
      <i class="fas fa-calendar-check text-muted mb-3" style="font-size: 3rem;"></i>
      <p class="text-muted">No reservations yet</p>
    </div>
  </div>
</template>

<script>
import { db, storage } from '../firebase';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export default {
  name: 'Reservations',
  props: ['trip'],
  data() {
    return {
      newReservation: {
        name: '',
        link: '',
        file: null
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
            }));
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

    handleFileUpload(event) {
      this.newReservation.file = event.target.files[0];
    },

    removeFile() {
      this.newReservation.file = null;
    },

    formatDate(timestamp) {
      if (!timestamp) return '';
      const date = timestamp.toDate();
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },

    async addReservation() {
      if (!this.newReservation.name.trim()) {
        this.errorMessage = "Please enter a reservation name";
        return;
      }

      this.loading = true;
      this.errorMessage = '';

      try {
        let fileUrl = '';
        if (this.newReservation.file) {
          const fileRef = storageRef(storage, `reservations/${this.trip.id}/${Date.now()}_${this.newReservation.file.name}`);
          await uploadBytes(fileRef, this.newReservation.file);
          fileUrl = await getDownloadURL(fileRef);
        }

        await addDoc(collection(db, 'trips', this.trip.id, 'reservations'), {
          name: this.newReservation.name.trim(),
          link: this.newReservation.link.trim() || null,
          fileUrl: fileUrl || null,
          createdAt: new Date()
        });

        this.newReservation = { name: '', link: '', file: null };
      } catch (error) {
        console.error("Error adding reservation:", error);
        this.errorMessage = "Failed to add reservation";
      } finally {
        this.loading = false;
      }
    },

    async deleteReservation(reservationId) {
      if (!confirm('Are you sure you want to delete this reservation?')) return;
      
      this.loading = true;
      try {
        await deleteDoc(doc(db, 'trips', this.trip.id, 'reservations', reservationId));
      } catch (error) {
        console.error("Error deleting reservation:", error);
        this.errorMessage = "Failed to delete reservation";
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.reservations-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>