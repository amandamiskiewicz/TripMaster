<template>
  <div class="reservations-container">
    <div class="header">
      <h2>Reservations - {{ trip.name }}</h2>
      <button @click="$emit('close')" class="back-btn">
        <i class="fas fa-arrow-left"></i> Back
      </button>
    </div>

    <div class="add-reservation">
      <h3>Add New Reservation</h3>
      <div class="form-group">
        <input 
          v-model="newReservation.name" 
          placeholder="Reservation name (e.g. Flight to Paris)" 
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <input 
          v-model="newReservation.link" 
          placeholder="Reservation link (optional)" 
          class="form-input"
          type="url"
        />
      </div>
      <div class="file-upload">
        <label class="upload-btn">
          <i class="fas fa-paperclip"></i> Attach File
          <input 
            type="file" 
            @change="handleFileUpload" 
            class="d-none"
          />
        </label>
        <span v-if="newReservation.file" class="file-name">
          {{ newReservation.file.name }}
          <button @click="removeFile" class="remove-file-btn">
            <i class="fas fa-times"></i>
          </button>
        </span>
      </div>
      <button 
        @click="addReservation" 
        class="submit-btn"
        :disabled="!newReservation.name.trim() || loading"
      >
        <span v-if="!loading">Add Reservation</span>
        <span v-else class="spinner"></span>
      </button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>

    <div v-if="loading && !reservations.length" class="loading-indicator">
      <div class="spinner"></div>
    </div>

    <div v-if="reservations.length" class="reservations-list">
      <h3>Your Reservations</h3>
      <div class="reservation-card" v-for="res in reservations" :key="res.id">
        <div class="reservation-info">
          <h4>{{ res.name }}</h4>
          <div v-if="res.link" class="reservation-link">
            <a :href="res.link" target="_blank" class="link-btn">
              <i class="fas fa-external-link-alt"></i> Open Link
            </a>
          </div>
          <div v-if="res.fileUrl" class="reservation-file">
            <a :href="res.fileUrl" target="_blank" class="file-btn">
              <i class="fas fa-file-download"></i> Download Attachment
            </a>
          </div>
          <div class="reservation-date">
            Added on {{ formatDate(res.createdAt) }}
          </div>
        </div>
        <button @click="deleteReservation(res.id)" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>

    <div v-if="!loading && !reservations.length" class="empty-state">
      <i class="fas fa-calendar-check empty-icon"></i>
      <p>No reservations yet</p>
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
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header h2 {
  color: #2c3e50;
  margin: 0;
}

.back-btn {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.back-btn:hover {
  background: #e9e9e9;
}

.add-reservation {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.add-reservation h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.file-upload {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.upload-btn {
  background: #f5f5f5;
  border: 1px dashed #ccc;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.upload-btn:hover {
  background: #e9e9e9;
}

.file-name {
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
}

.remove-file-btn {
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  padding: 0;
}

.submit-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
}

.submit-btn:hover {
  background: #389d73;
}

.submit-btn:disabled {
  background: #b3e0cc;
  cursor: not-allowed;
}

.error-message {
  color: #e74c3c;
  margin-top: 10px;
  text-align: center;
}

.loading-indicator {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.reservations-list {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.reservations-list h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #2c3e50;
}

.reservation-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: all 0.2s;
}

.reservation-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.reservation-info {
  flex: 1;
}

.reservation-info h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.reservation-link,
.reservation-file {
  margin-bottom: 8px;
}

.link-btn,
.file-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #42b883;
  text-decoration: none;
  transition: all 0.2s;
}

.link-btn:hover,
.file-btn:hover {
  color: #389d73;
}

.reservation-date {
  font-size: 0.85rem;
  color: #777;
}

.delete-btn {
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  padding: 5px;
  margin-left: 15px;
  transition: all 0.2s;
}

.delete-btn:hover {
  color: #c0392b;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.empty-icon {
  font-size: 3rem;
  color: #ddd;
  margin-bottom: 15px;
}

.empty-state p {
  color: #777;
  margin: 0;
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .back-btn {
    align-self: flex-end;
  }
}
</style>