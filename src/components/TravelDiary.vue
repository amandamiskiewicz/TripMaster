<template>
  <div class="travel-diary">
    <h3>Travel Diary - {{ trip.name }}</h3>
    
    <!-- Title and content fields -->
    <div class="mb-4">
      <label for="diaryTitle" class="form-label">Title</label>
      <input 
        v-model="diaryTitle" 
        type="text" 
        id="diaryTitle" 
        class="form-control" 
        placeholder="Enter the title" 
        required
      />
    </div>
    
    <div class="mb-4">
      <label for="diaryContent" class="form-label">Content</label>
      <textarea 
        v-model="diaryContent" 
        id="diaryContent" 
        class="form-control" 
        rows="4" 
        placeholder="Write your thoughts..."
        required
      ></textarea>
    </div>

    <!-- Image upload options -->
    <div class="mb-4">
      <label class="form-label">Add Photo</label>
      <div class="d-flex gap-3">
        <!-- File upload -->
        <button 
          class="btn btn-outline-primary flex-grow-1"
          @click="triggerFileInput"
        >
          <i class="bi bi-upload"></i> Upload Photo
        </button>
        
        <!-- Camera capture -->
        <button 
          class="btn btn-outline-success flex-grow-1"
          @click="startCamera"
          :disabled="cameraActive"
        >
          <i class="bi bi-camera"></i> Take Photo
        </button>
      </div>
      
      <!-- Hidden file input -->
      <input 
        ref="fileInput"
        type="file" 
        @change="handleImageUpload" 
        class="d-none" 
        accept="image/*"
      />
    </div>

    <!-- Camera preview -->
    <div v-if="cameraActive" class="mb-4 camera-preview">
      <video ref="cameraPreview" autoplay playsinline class="img-fluid rounded"></video>
      <div class="d-flex justify-content-center mt-2">
        <button class="btn btn-primary me-2" @click="capturePhoto">
          <i class="bi bi-camera-fill"></i> Capture
        </button>
        <button class="btn btn-danger" @click="stopCamera">
          <i class="bi bi-x-circle"></i> Cancel
        </button>
      </div>
    </div>

    <!-- Image preview -->
    <div v-if="imagePreview" class="mb-4">
      <h5>Image Preview:</h5>
      <img :src="imagePreview" alt="Diary Image Preview" class="img-fluid" style="max-height: 200px;" />
      <button class="btn btn-sm btn-danger mt-2" @click="removeImage">
        <i class="bi bi-trash"></i> Remove Image
      </button>
    </div>

    <!-- Save and close buttons -->
    <div class="d-flex gap-3 mb-4">
      <button 
        class="btn btn-primary" 
        @click="saveDiaryEntry" 
        :disabled="!diaryTitle.trim() || !diaryContent.trim() || loading"
      >
        <span v-if="!loading">Save</span>
        <span v-else class="spinner-border spinner-border-sm"></span>
      </button>
      <button class="btn btn-secondary" @click="resetForm">Clear</button>
    </div>

    <!-- Search field for diary entries -->
    <div class="my-4">
      <input 
        v-model="searchQuery" 
        type="text" 
        class="form-control" 
        placeholder="Search entries by title..." 
      />
    </div>

    <!-- Loading indicator -->
    <div v-if="loadingEntries" class="text-center my-4">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- List of diary entries -->
    <div v-if="filteredDiaryEntries.length" class="mt-5">
      <h4>Your Diary Entries</h4>
      <ul class="list-group">
        <li v-for="entry in filteredDiaryEntries" :key="entry.id" class="list-group-item mb-3">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <h5>{{ entry.title }}</h5>
              <p class="text-muted mb-2">
                {{ formatDate(entry.createdAt) }}
              </p>
              <p class="mb-2">{{ entry.content }}</p>
              <div v-if="entry.imageUrl" class="mb-2">
                <img :src="entry.imageUrl" alt="Entry Image" class="img-fluid rounded" style="max-height: 200px;" />
              </div>
            </div>
            <button 
              class="btn btn-sm btn-danger"
              @click="deleteEntry(entry.id, entry.imageUrl)"
              :disabled="loading"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="!loadingEntries && !filteredDiaryEntries.length" class="alert alert-info mt-4">
      No diary entries found. Start by adding your first entry!
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, onUnmounted } from 'vue';
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
  props: {
    trip: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const diaryTitle = ref('');
    const diaryContent = ref('');
    const diaryEntries = ref([]);
    const imageFile = ref(null);
    const imagePreview = ref(null);
    const searchQuery = ref('');
    const loading = ref(false);
    const loadingEntries = ref(false);
    const errorMessage = ref('');
    const cameraActive = ref(false);
    const cameraPreview = ref(null);
    const fileInput = ref(null);
    const cameraStream = ref(null);

    // Load diary entries from Firestore
    const loadDiaryEntries = () => {
      loadingEntries.value = true;
      const q = query(
        collection(db, 'trips', props.trip.id, 'diaryEntries'),
        orderBy('createdAt', 'desc')
      );
      
      return onSnapshot(q, (snapshot) => {
        diaryEntries.value = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        loadingEntries.value = false;
      }, (error) => {
        console.error("Error loading entries:", error);
        errorMessage.value = "Failed to load diary entries";
        loadingEntries.value = false;
      });
    };

    // Trigger file input click
    const triggerFileInput = () => {
      if (cameraActive.value) stopCamera();
      fileInput.value.click();
    };

    // Handle image upload
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
          errorMessage.value = "Image size should be less than 5MB";
          return;
        }
        imageFile.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    // Start camera
    const startCamera = async () => {
      try {
        cameraActive.value = true;
        cameraStream.value = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false
        });
        if (cameraPreview.value) {
          cameraPreview.value.srcObject = cameraStream.value;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
        errorMessage.value = "Could not access camera. Please check permissions.";
        cameraActive.value = false;
      }
    };

    // Stop camera
    const stopCamera = () => {
      if (cameraStream.value) {
        cameraStream.value.getTracks().forEach(track => track.stop());
        cameraStream.value = null;
      }
      cameraActive.value = false;
    };

    // Capture photo from camera
    const capturePhoto = () => {
      if (!cameraPreview.value) return;
      
      const canvas = document.createElement('canvas');
      canvas.width = cameraPreview.value.videoWidth;
      canvas.height = cameraPreview.value.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(cameraPreview.value, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob((blob) => {
        imageFile.value = new File([blob], 'camera-photo.jpg', { type: 'image/jpeg' });
        imagePreview.value = canvas.toDataURL('image/jpeg');
        stopCamera();
      }, 'image/jpeg', 0.9);
    };

    // Remove selected image
    const removeImage = () => {
      imageFile.value = null;
      imagePreview.value = null;
    };

    // Upload image to Firebase Storage
    const uploadImage = async () => {
      if (!imageFile.value) return null;
      
      try {
        const filePath = `diaryEntries/${props.trip.id}/${Date.now()}_${imageFile.value.name}`;
        const fileRef = storageRef(storage, filePath);
        await uploadBytes(fileRef, imageFile.value);
        return await getDownloadURL(fileRef);
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    };

    // Save diary entry to Firestore
    const saveDiaryEntry = async () => {
      if (!diaryTitle.value.trim() || !diaryContent.value.trim()) return;
      
      loading.value = true;
      errorMessage.value = '';

      try {
        let imageUrl = null;
        if (imageFile.value) {
          imageUrl = await uploadImage();
        }

        await addDoc(collection(db, 'trips', props.trip.id, 'diaryEntries'), {
          title: diaryTitle.value.trim(),
          content: diaryContent.value.trim(),
          imageUrl,
          createdAt: new Date()
        });

        resetForm();
      } catch (error) {
        console.error("Error saving entry:", error);
        errorMessage.value = "Failed to save diary entry";
      } finally {
        loading.value = false;
      }
    };

    // Delete diary entry
    const deleteEntry = async (entryId, imageUrl) => {
      if (!confirm('Are you sure you want to delete this entry?')) return;
      
      loading.value = true;
      try {
        // Delete image from Storage if exists
        if (imageUrl) {
          const imageRef = storageRef(storage, imageUrl);
          await deleteObject(imageRef);
        }
        
        // Delete entry from Firestore
        await deleteDoc(doc(db, 'trips', props.trip.id, 'diaryEntries', entryId));
      } catch (error) {
        console.error("Error deleting entry:", error);
        errorMessage.value = "Failed to delete diary entry";
      } finally {
        loading.value = false;
      }
    };

    // Reset form
    const resetForm = () => {
      diaryTitle.value = '';
      diaryContent.value = '';
      imageFile.value = null;
      imagePreview.value = null;
      errorMessage.value = '';
      if (cameraActive.value) stopCamera();
    };

    // Format date
    const formatDate = (timestamp) => {
      if (!timestamp) return '';
      const date = timestamp.toDate();
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    // Load entries when component mounts
    let unsubscribe;
    onMounted(() => {
      unsubscribe = loadDiaryEntries();
    });

    // Cleanup on unmount
    onUnmounted(() => {
      if (unsubscribe) unsubscribe();
      if (cameraActive.value) stopCamera();
    });

    // Filter entries by search query
    const filteredDiaryEntries = computed(() => {
      return diaryEntries.value.filter(entry => 
        entry.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        entry.content.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    return {
      diaryTitle,
      diaryContent,
      diaryEntries,
      imagePreview,
      searchQuery,
      loading,
      loadingEntries,
      errorMessage,
      cameraActive,
      cameraPreview,
      fileInput,
      saveDiaryEntry,
      resetForm,
      handleImageUpload,
      removeImage,
      deleteEntry,
      filteredDiaryEntries,
      formatDate,
      triggerFileInput,
      startCamera,
      stopCamera,
      capturePhoto
    };
  }
};
</script>

<style scoped>
.travel-diary {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.travel-diary h3 {
  margin-bottom: 20px;
  color: #2c3e50;
}

.list-group-item {
  border-radius: 8px !important;
  transition: all 0.3s ease;
}

.list-group-item:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background-color: #3498db;
  border-color: #3498db;
}

.btn-danger {
  background-color: #e74c3c;
  border-color: #e74c3c;
}

.alert {
  max-width: 600px;
  margin: 20px auto;
}

.spinner-border {
  width: 1.5rem;
  height: 1.5rem;
  border-width: 0.2em;
}

.img-fluid {
  max-height: 200px;
  object-fit: contain;
  border-radius: 4px;
}

.camera-preview {
  position: relative;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
}

.camera-preview video {
  width: 100%;
  max-height: 300px;
  display: block;
}

.bi {
  margin-right: 5px;
}
</style>