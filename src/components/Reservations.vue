<template>
  <div class="container py-4">
    <h3>Reservations - {{ trip.name }}</h3>

    <div class="mb-3">
      <input v-model="newReservation.name" placeholder="Reservation name (e.g. Flight to Paris)" class="form-control mb-2" required />
      <input v-model="newReservation.link" placeholder="Reservation link (optional)" class="form-control mb-2" type="url" />
      <input type="file" @change="handleFileUpload" class="form-control mb-2" />
      <button class="btn btn-primary" @click="addReservation" :disabled="!newReservation.name.trim()">
        Add Reservation
      </button>
      <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
    </div>

    <div v-if="loading" class="text-center my-4">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="reservations.length">
      <h4>Reservations List</h4>
      <ul class="list-group">
        <li v-for="res in reservations" :key="res.id" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <strong>{{ res.name }}</strong>
              <div v-if="res.link">
                <a :href="res.link" target="_blank" class="text-decoration-none">Open Link</a>
              </div>
              <div v-if="res.fileUrl">
                <a :href="res.fileUrl" target="_blank" class="text-decoration-none">View Attachment</a>
              </div>
            </div>
            <button class="btn btn-sm btn-danger" @click="deleteReservation(res.id)">Delete</button>
          </div>
        </li>
      </ul>
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
            this.reservations = [];
            snapshot.forEach((doc) => {
              this.reservations.push({
                id: doc.id,
                ...doc.data()
              });
            });
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

    async addReservation() {
      if (!this.newReservation.name.trim()) {
        this.errorMessage = "Please enter a reservation name";
        return;
      }

      this.loading = true;
      this.errorMessage = '';

      try {
        // Upload file to Firebase Storage if exists
        let fileUrl = '';
        if (this.newReservation.file) {
          const fileRef = storageRef(storage, `reservations/${this.trip.id}/${Date.now()}_${this.newReservation.file.name}`);
          await uploadBytes(fileRef, this.newReservation.file);
          fileUrl = await getDownloadURL(fileRef);
        }

        // Add to Firestore
        await addDoc(collection(db, 'trips', this.trip.id, 'reservations'), {
          name: this.newReservation.name.trim(),
          link: this.newReservation.link.trim() || null,
          fileUrl: fileUrl || null,
          createdAt: new Date()
        });

        // Reset form
        this.newReservation = { name: '', link: '', file: null };
      } catch (error) {
        console.error("Error adding reservation:", error);
        this.errorMessage = "Failed to add reservation";
      } finally {
        this.loading = false;
      }
    },

    async deleteReservation(reservationId) {
      if (confirm('Are you sure you want to delete this reservation?')) {
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
  }
};
</script>

<style scoped>
.list-group-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>