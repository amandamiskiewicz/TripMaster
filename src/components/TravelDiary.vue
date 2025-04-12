<template>
  <div class="travel-diary">
    <h3>Travel Diary</h3>
    
    <!-- Title and content fields -->
    <div class="mb-4">
      <label for="diaryTitle" class="form-label">Title</label>
      <input v-model="diaryTitle" type="text" id="diaryTitle" class="form-control" placeholder="Enter the title" />
    </div>
    
    <div class="mb-4">
      <label for="diaryContent" class="form-label">Content</label>
      <textarea v-model="diaryContent" id="diaryContent" class="form-control" rows="4" placeholder="Write your thoughts..."></textarea>
    </div>

    <!-- Image upload -->
    <div class="mb-4">
      <label for="diaryImage" class="form-label">Attach an Image</label>
      <input type="file" @change="handleImageUpload" class="form-control" />
    </div>

    <div v-if="imagePreview" class="mb-4">
      <h5>Image Preview:</h5>
      <img :src="imagePreview" alt="Diary Image Preview" class="img-fluid" style="max-height: 200px; object-fit: cover;" />
    </div>

    <!-- Save and close buttons -->
    <div class="d-flex gap-3">
      <button class="btn btn-primary" @click="saveDiaryEntry">Save</button>
      <button class="btn btn-secondary" @click="close">Close</button>
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

    <!-- List of diary entries -->
    <div v-if="filteredDiaryEntries.length" class="mt-5">
      <h4>Diary Entries</h4>
      <ul class="list-group">
        <li v-for="(entry, index) in filteredDiaryEntries" :key="index" class="list-group-item">
          <h5>{{ entry.title }}</h5>
          <p>{{ entry.content }}</p>
          <div v-if="entry.image" class="mb-2">
            <img :src="entry.image" alt="Entry Image" class="img-fluid" style="max-height: 100px; object-fit: cover;" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, defineComponent, computed } from 'vue';

export default defineComponent({
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
    const imagePreview = ref(null);
    const searchQuery = ref('');

    // Load existing diary entries from localStorage
    const loadDiaryEntries = () => {
      const storedEntries = localStorage.getItem(`diaryEntries-${props.trip.id}`);
      if (storedEntries) {
        diaryEntries.value = JSON.parse(storedEntries);
      }
    };

    // Save the diary entry to localStorage
    const saveDiaryEntry = () => {
      if (diaryTitle.value.trim() && diaryContent.value.trim()) {
        const newEntry = {
          title: diaryTitle.value,
          content: diaryContent.value,
          image: imagePreview.value || null
        };
        diaryEntries.value.push(newEntry);

        // Save the updated diary entries to localStorage
        localStorage.setItem(`diaryEntries-${props.trip.id}`, JSON.stringify(diaryEntries.value));

        // Reset the fields
        diaryTitle.value = '';
        diaryContent.value = '';
        imagePreview.value = null;
      }
    };

    // Handle image upload and preview
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreview.value = e.target.result;  // Set the image preview
        };
        reader.readAsDataURL(file);
      }
    };

    // Close the travel diary section
    const close = () => {
      diaryTitle.value = '';
      diaryContent.value = '';
      imagePreview.value = null;
      diaryEntries.value = [];
      // Emit close event to parent component
      props.$emit('close');
    };

    // Load entries when the component is mounted
    onMounted(() => {
      loadDiaryEntries();
    });

    // Computed property to filter diary entries by title
    const filteredDiaryEntries = computed(() => {
      return diaryEntries.value.filter(entry => 
        entry.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    return {
      diaryTitle,
      diaryContent,
      diaryEntries,
      imagePreview,
      searchQuery,
      saveDiaryEntry,
      close,
      handleImageUpload,
      filteredDiaryEntries
    };
  }
});
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
}

.travel-diary .list-group-item {
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.travel-diary .btn {
  width: 100px;
}

.travel-diary img {
  max-height: 200px;
  object-fit: cover;
  margin-top: 10px;
}
</style>
