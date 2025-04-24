<template>
  <div class="travel-diary-container">
    <div class="header">
      <h2>Travel Diary - {{ trip.name }}</h2>
      <button @click="$emit('close')" class="back-btn">
        <i class="fas fa-arrow-left"></i> Back
      </button>
    </div>

    <div class="entry-form">
      <h3>New Entry</h3>
      <div class="form-group">
        <input 
          v-model="diaryTitle" 
          placeholder="Entry title" 
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <textarea 
          v-model="diaryContent" 
          placeholder="Write your thoughts..." 
          class="form-textarea"
          rows="5"
          required
        ></textarea>
      </div>

      <div class="image-upload">
        <div class="upload-options">
          <button @click="triggerFileInput" class="upload-btn">
            <i class="fas fa-upload"></i> Upload Photo
          </button>
          <button 
            @click="toggleCamera" 
            class="upload-btn"
            :class="{ active: cameraActive }"
          >
            <i class="fas fa-camera"></i> {{ cameraActive ? 'Cancel' : 'Take Photo' }}
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

      <div v-if="cameraActive" class="camera-preview">
        <video ref="cameraPreview" autoplay playsinline></video>
        <button @click="capturePhoto" class="capture-btn">
          <i class="fas fa-camera"></i> Capture
        </button>
      </div>

      <div v-if="imagePreview" class="image-preview">
        <img :src="imagePreview" alt="Preview" class="preview-image" />
        <button @click="removeImage" class="remove-image-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="form-actions">
        <button 
          @click="saveDiaryEntry" 
          class="submit-btn"
          :disabled="!diaryTitle.trim() || !diaryContent.trim() || loading"
        >
          <span v-if="!loading">Save Entry</span>
          <span v-else class="spinner"></span>
        </button>
        <button @click="resetForm" class="cancel-btn">
          Clear
        </button>
      </div>
    </div>

    <div class="search-box">
      <input 
        v-model="searchQuery" 
        placeholder="Search entries..." 
        class="search-input"
      />
      <i class="fas fa-search search-icon"></i>
    </div>

    <div v-if="loadingEntries" class="loading-indicator">
      <div class="spinner"></div>
    </div>

    <div v-if="!loadingEntries && filteredDiaryEntries.length" class="entries-list">
      <h3>Your Entries</h3>
      <div 
        v-for="entry in filteredDiaryEntries" 
        :key="entry.id" 
        class="entry-card"
      >
        <div class="entry-content">
          <h4>{{ entry.title }}</h4>
          <div class="entry-date">{{ formatDate(entry.createdAt) }}</div>
          <p class="entry-text">{{ entry.content }}</p>
          <div v-if="entry.imageUrl" class="entry-image">
            <img :src="entry.imageUrl" alt="Entry image" />
          </div>
        </div>
        <button 
          @click="deleteEntry(entry.id, entry.imageUrl)" 
          class="delete-btn"
          :disabled="loading"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>

    <div v-if="!loadingEntries && !filteredDiaryEntries.length" class="empty-state">
      <i class="fas fa-book-open empty-icon"></i>
      <p>No diary entries yet</p>
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
.travel-diary-container {
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

.entry-form {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.entry-form h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 15px;
}

.form-input,
.form-textarea,
.search-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.form-input:focus,
.form-textarea:focus,
.search-input:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
}

.form-textarea {
  resize: vertical;
}

.image-upload {
  margin-bottom: 20px;
}

.upload-options {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.upload-btn {
  flex: 1;
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.upload-btn:hover {
  background: #e9e9e9;
}

.upload-btn.active {
  background: #e74c3c;
  color: white;
  border-color: #e74c3c;
}

.camera-preview {
  position: relative;
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  background: #000;
}

.camera-preview video {
  width: 100%;
  display: block;
}

.capture-btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.image-preview {
  position: relative;
  margin-bottom: 15px;
}

.preview-image {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #eee;
}

.remove-image-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-actions {
  display: flex;
  gap: 10px;
}

.submit-btn,
.cancel-btn {
  flex: 1;
  padding: 12px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-btn {
  background: #42b883;
  color: white;
  border: none;
}

.submit-btn:hover {
  background: #389d73;
}

.submit-btn:disabled {
  background: #b3e0cc;
  cursor: not-allowed;
}

.cancel-btn {
  background: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}

.cancel-btn:hover {
  background: #e9e9e9;
}

.search-box {
  position: relative;
  margin-bottom: 20px;
}

.search-input {
  padding-left: 40px;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
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

.entries-list {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.entries-list h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #2c3e50;
}

.entry-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: all 0.2s;
}

.entry-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.entry-content {
  flex: 1;
}

.entry-content h4 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.entry-date {
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 10px;
}

.entry-text {
  margin: 0 0 15px 0;
  white-space: pre-line;
}

.entry-image img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 6px;
  border: 1px solid #eee;
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

.delete-btn:disabled {
  color: #ffb8b8;
  cursor: not-allowed;
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

  .upload-options {
    flex-direction: column;
  }
}
</style>