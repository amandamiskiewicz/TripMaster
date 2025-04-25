<template>
  <div class="container-fluid p-3 p-md-5 travel-diary-container">
    <div class="header d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
      <h2 class="text-success mb-3 mb-md-0">Travel Diary - {{ trip.name }}</h2>
      <button @click="$emit('close')" class="btn btn-outline-success">
        <i class="fas fa-arrow-left me-2"></i>Back
      </button>
    </div>

    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <h3 class="card-title text-success mb-4">New Entry</h3>
        
        <div class="mb-3">
          <input 
            v-model="diaryTitle" 
            placeholder="Entry title" 
            class="form-control"
            required
          />
        </div>
        
        <div class="mb-3">
          <textarea 
            v-model="diaryContent" 
            placeholder="Write your thoughts..." 
            class="form-control"
            rows="5"
            required
          ></textarea>
        </div>

        <div class="mb-3">
          <div class="d-flex flex-column flex-sm-row gap-2 mb-3">
            <button @click="triggerFileInput" class="btn btn-outline-success flex-grow-1">
              <i class="fas fa-upload me-2"></i>Upload Photo
            </button>
            <button 
              @click="toggleCamera" 
              class="btn btn-outline-success flex-grow-1"
              :class="{ 'btn-danger': cameraActive }"
            >
              <i class="fas fa-camera me-2"></i>{{ cameraActive ? 'Cancel' : 'Take Photo' }}
            </button>
          </div>
          <input 
            ref="fileInput"
            type="file" 
            @change="handleImageUpload" 
            class="d-none" 
            accept="image/*"
          />
        </div>

        <div v-if="cameraActive" class="camera-preview mb-3 position-relative">
          <video ref="cameraPreview" autoplay playsinline class="w-100 rounded"></video>
          <button @click="capturePhoto" class="btn btn-success position-absolute bottom-0 start-50 translate-middle-x mb-3">
            <i class="fas fa-camera me-2"></i>Capture
          </button>
        </div>

        <div v-if="imagePreview" class="image-preview mb-3 position-relative">
          <img :src="imagePreview" alt="Preview" class="img-fluid rounded border border-success" />
          <button @click="removeImage" class="btn btn-danger position-absolute top-0 end-0 m-2 rounded-circle">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="d-flex gap-2">
          <button 
            @click="saveDiaryEntry" 
            class="btn btn-success flex-grow-1"
            :disabled="!diaryTitle.trim() || !diaryContent.trim() || loading"
          >
            <span v-if="!loading">Save Entry</span>
            <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
          <button @click="resetForm" class="btn btn-outline-secondary flex-grow-1">
            Clear
          </button>
        </div>
      </div>
    </div>

    <div class="mb-4 position-relative">
      <input 
        v-model="searchQuery" 
        placeholder="Search entries..." 
        class="form-control ps-4"
      />
      <i class="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
    </div>

    <div v-if="loadingEntries" class="text-center py-4">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-if="!loadingEntries && filteredDiaryEntries.length" class="card shadow-sm">
      <div class="card-body">
        <h3 class="card-title text-success mb-4">Your Entries</h3>
        <div 
          v-for="entry in filteredDiaryEntries" 
          :key="entry.id" 
          class="card mb-3"
        >
          <div class="card-body d-flex justify-content-between">
            <div class="flex-grow-1">
              <h4 class="text-success">{{ entry.title }}</h4>
              <div class="text-muted small mb-2">{{ formatDate(entry.createdAt) }}</div>
              <p class="card-text">{{ entry.content }}</p>
              <div v-if="entry.imageUrl" class="mt-3">
                <img :src="entry.imageUrl" alt="Entry image" class="img-fluid rounded border border-success" />
              </div>
            </div>
            <button 
              @click="deleteEntry(entry.id, entry.imageUrl)" 
              class="btn btn-outline-danger ms-3 align-self-start"
              :disabled="loading"
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!loadingEntries && !filteredDiaryEntries.length" class="card shadow-sm text-center py-5">
      <i class="fas fa-book-open text-muted mb-3" style="font-size: 3rem;"></i>
      <p class="text-muted">No diary entries yet</p>
    </div>
  </div>
</template>

<script>
import { db, storage } from '../firebase';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { 
  ref as storageRef, 
  uploadBytes, 
  deleteObject, 
  getDownloadURL 
} from 'firebase/storage';

export default {
  name: 'TravelDiary',
  props: ['trip'],
  data() {
    return {
      diaryTitle: '',
      diaryContent: '',
      diaryEntries: [],
      imageFile: null,
      imagePreview: null,
      searchQuery: '',
      loading: false,
      loadingEntries: false,
      errorMessage: '',
      cameraActive: false,
      cameraPreview: null,
      fileInput: null,
      cameraStream: null,
      unsubscribe: null
    };
  },
  created() {
    this.loadDiaryEntries();
  },
  beforeUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    if (this.cameraActive) this.stopCamera();
  },
  computed: {
    filteredDiaryEntries() {
      return this.diaryEntries.filter(entry => 
        entry.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        entry.content.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    async loadDiaryEntries() {
      this.loadingEntries = true;
      const q = query(
        collection(db, 'trips', this.trip.id, 'diaryEntries'),
        orderBy('createdAt', 'desc')
      );
      
      this.unsubscribe = onSnapshot(q, (snapshot) => {
        this.diaryEntries = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        this.loadingEntries = false;
      }, (error) => {
        console.error("Error loading entries:", error);
        this.errorMessage = "Failed to load diary entries";
        this.loadingEntries = false;
      });
    },

    triggerFileInput() {
      if (this.cameraActive) this.stopCamera();
      this.$refs.fileInput.click();
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file && file.size <= 5 * 1024 * 1024) {
        this.imageFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    async toggleCamera() {
      if (this.cameraActive) {
        this.stopCamera();
      } else {
        await this.startCamera();
      }
    },

    async startCamera() {
      try {
        this.cameraActive = true;
        this.cameraStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false
        });
        this.$refs.cameraPreview.srcObject = this.cameraStream;
      } catch (error) {
        console.error("Error accessing camera:", error);
        this.errorMessage = "Could not access camera";
        this.cameraActive = false;
      }
    },

    stopCamera() {
      if (this.cameraStream) {
        this.cameraStream.getTracks().forEach(track => track.stop());
        this.cameraStream = null;
      }
      this.cameraActive = false;
    },

    capturePhoto() {
      const canvas = document.createElement('canvas');
      canvas.width = this.$refs.cameraPreview.videoWidth;
      canvas.height = this.$refs.cameraPreview.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(this.$refs.cameraPreview, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob((blob) => {
        this.imageFile = new File([blob], 'capture.jpg', { type: 'image/jpeg' });
        this.imagePreview = canvas.toDataURL('image/jpeg');
        this.stopCamera();
      }, 'image/jpeg', 0.9);
    },

    removeImage() {
      this.imageFile = null;
      this.imagePreview = null;
    },

    async uploadImage() {
      if (!this.imageFile) return null;
      
      try {
        const filePath = `diaryEntries/${this.trip.id}/${Date.now()}_${this.imageFile.name}`;
        const fileRef = storageRef(storage, filePath);
        await uploadBytes(fileRef, this.imageFile);
        return await getDownloadURL(fileRef);
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    },

    async saveDiaryEntry() {
      if (!this.diaryTitle.trim() || !this.diaryContent.trim()) return;
      
      this.loading = true;
      this.errorMessage = '';

      try {
        let imageUrl = null;
        if (this.imageFile) {
          imageUrl = await this.uploadImage();
        }

        await addDoc(collection(db, 'trips', this.trip.id, 'diaryEntries'), {
          title: this.diaryTitle.trim(),
          content: this.diaryContent.trim(),
          imageUrl,
          createdAt: new Date()
        });

        this.resetForm();
      } catch (error) {
        console.error("Error saving entry:", error);
        this.errorMessage = "Failed to save diary entry";
      } finally {
        this.loading = false;
      }
    },

    async deleteEntry(entryId, imageUrl) {
      if (!confirm('Are you sure you want to delete this entry?')) return;
      
      this.loading = true;
      try {
        if (imageUrl) {
          const imageRef = storageRef(storage, imageUrl);
          await deleteObject(imageRef);
        }
        
        await deleteDoc(doc(db, 'trips', this.trip.id, 'diaryEntries', entryId));
      } catch (error) {
        console.error("Error deleting entry:", error);
        this.errorMessage = "Failed to delete diary entry";
      } finally {
        this.loading = false;
      }
    },

    resetForm() {
      this.diaryTitle = '';
      this.diaryContent = '';
      this.imageFile = null;
      this.imagePreview = null;
      this.errorMessage = '';
      if (this.cameraActive) this.stopCamera();
    },

    formatDate(timestamp) {
      if (!timestamp) return '';
      const date = timestamp.toDate();
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
};
</script>

<style scoped>
.camera-preview {
  background: #000;
  border-radius: 0.375rem;
}

.image-preview {
  max-height: 300px;
  overflow: hidden;
}
</style>