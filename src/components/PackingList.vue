<template>
  <div class="packing-list container-fluid p-3 p-md-4">
    <div class="header d-flex justify-content-between align-items-center mb-4">
      <h2 class="h4 mb-0 text-success">Packing List - {{ trip.name }}</h2>
      <button @click="$emit('close')" class="btn btn-outline-secondary btn-sm" aria-label="Close packing list">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4">
      <div 
        v-for="category in categories" 
        :key="category.id"
        class="col"
      >
        <div 
          class="card h-100 border-0 shadow-sm"
          :class="{ 'border-success': selectedCategory === category.name }"
          @click="selectCategory(category.name)"
        >
          <div class="card-body">
            <h3 class="h5 card-title text-success">{{ category.name }}</h3>
            <div class="progress mb-2" style="height: 6px;">
              <div 
                class="progress-bar bg-success" 
                role="progressbar" 
                :style="{ width: getProgress(category) + '%' }"
                :aria-valuenow="getProgress(category)"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p class="card-text small text-muted mb-0">
              {{ getCheckedCount(category) }}/{{ category.items.length }} items
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column flex-md-row gap-2 mb-4">
      <button 
        @click="showAddCategory = true" 
        class="btn btn-success flex-grow-1"
        aria-label="Add new category"
      >
        <i class="fas fa-plus me-2"></i> Add New Category
      </button>
      <button 
        @click="showAddItem = true" 
        class="btn btn-outline-success flex-grow-1"
        :disabled="!selectedCategory"
        aria-label="Add new item to selected category"
      >
        <i class="fas fa-plus me-2"></i> Add Item to {{ selectedCategory || 'Category' }}
      </button>
    </div>

    <div v-if="showAddCategory" class="card mb-4 border-success">
      <div class="card-body">
        <div class="input-group mb-3">
          <input 
            v-model="newCategory" 
            placeholder="Enter category name"
            class="form-control"
            @keyup.enter="addCategory"
            aria-label="Category name input"
          >
          <button @click="addCategory" class="btn btn-success" aria-label="Confirm adding category">
            <i class="fas fa-check me-1"></i> Add
          </button>
          <button @click="showAddCategory = false" class="btn btn-outline-secondary" aria-label="Cancel adding category">
            <i class="fas fa-times me-1"></i> Cancel
          </button>
        </div>
      </div>
    </div>

    <div v-if="showAddItem" class="card mb-4 border-success">
      <div class="card-body">
        <div class="input-group mb-3">
          <input 
            v-model="newItem" 
            :placeholder="'Add item to ' + selectedCategory"
            class="form-control"
            @keyup.enter="addItem"
            aria-label="Item name input"
          >
          <button @click="addItem" class="btn btn-success" aria-label="Confirm adding item">
            <i class="fas fa-check me-1"></i> Add
          </button>
          <button @click="showAddItem = false" class="btn btn-outline-secondary" aria-label="Cancel adding item">
            <i class="fas fa-times me-1"></i> Cancel
          </button>
        </div>
      </div>
    </div>

    <div v-if="selectedCategory" class="card border-0 shadow-sm">
      <div class="card-body">
        <h3 class="h5 card-title text-success mb-3">{{ selectedCategory }}</h3>
        <div class="list-group">
          <div 
            v-for="item in getCurrentItems()" 
            :key="item.id"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            <div class="form-check">
              <input 
                type="checkbox" 
                v-model="item.checked"
                @change="updateItem(item)"
                class="form-check-input"
                :id="'item-' + item.id"
                :aria-label="(item.checked ? 'Unpack ' : 'Pack ') + item.name"
              >
              <label 
                class="form-check-label" 
                :for="'item-' + item.id"
                :class="{ 'text-muted text-decoration-line-through': item.checked }"
              >
                {{ item.name }}
              </label>
            </div>
            <button @click="deleteItem(item.id)" class="btn btn-link text-danger p-0" :aria-label="'Delete ' + item.name">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import { collection, doc, setDoc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore';

export default {
  name: 'PackingList',
  props: ['trip'],
  data() {
    return {
      categories: [],
      selectedCategory: null,
      showAddCategory: false,
      showAddItem: false,
      newCategory: '',
      newItem: '',
      unsubscribe: null
    };
  },
  created() {
    this.loadPackingList();
  },
  beforeUnmount() {
    this.unsubscribe && this.unsubscribe();
  },
  methods: {
    async loadPackingList() {
      try {
        const packingListRef = collection(db, 'trips', this.trip.id, 'packingList');
        this.unsubscribe = onSnapshot(packingListRef, (snapshot) => {
          this.categories = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
        });
      } catch (error) {
        console.error("Error loading packing list:", error);
      }
    },

    selectCategory(name) {
      this.selectedCategory = this.selectedCategory === name ? null : name;
      this.showAddCategory = false;
      this.showAddItem = false;
    },

    async addCategory() {
      if (!this.newCategory.trim()) return;

      try {
        await setDoc(doc(collection(db, 'trips', this.trip.id, 'packingList')), {
          name: this.newCategory.trim(),
          items: []
        });
        this.newCategory = '';
        this.showAddCategory = false;
      } catch (error) {
        console.error("Error adding category:", error);
      }
    },

    async addItem() {
      if (!this.selectedCategory || !this.newItem.trim()) return;

      try {
        const category = this.categories.find(c => c.name === this.selectedCategory);
        if (!category) return;

        const categoryRef = doc(db, 'trips', this.trip.id, 'packingList', category.id);
        const newItem = {
          id: Date.now().toString(),
          name: this.newItem.trim(),
          checked: false
        };

        await updateDoc(categoryRef, {
          items: [...category.items, newItem]
        });

        this.newItem = '';
        this.showAddItem = false;
      } catch (error) {
        console.error("Error adding item:", error);
      }
    },

    async updateItem(item) {
      try {
        const category = this.categories.find(c => c.items.some(i => i.id === item.id));
        if (!category) return;

        const categoryRef = doc(db, 'trips', this.trip.id, 'packingList', category.id);
        await updateDoc(categoryRef, {
          items: category.items
        });
      } catch (error) {
        console.error("Error updating item:", error);
      }
    },

    async deleteItem(itemId) {
      try {
        const category = this.categories.find(c => c.items.some(i => i.id === itemId));
        if (!category) return;

        const categoryRef = doc(db, 'trips', this.trip.id, 'packingList', category.id);
        await updateDoc(categoryRef, {
          items: category.items.filter(item => item.id !== itemId)
        });
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    },

    getCurrentItems() {
      if (!this.selectedCategory) return [];
      const category = this.categories.find(c => c.name === this.selectedCategory);
      return category ? category.items : [];
    },

    getCheckedCount(category) {
      return category.items.filter(item => item.checked).length;
    },

    getProgress(category) {
      if (category.items.length === 0) return 0;
      return Math.round((this.getCheckedCount(category) / category.items.length) * 100);
    }
  }
};
</script>

<style scoped>
.packing-list {
  background-color: #f8f9fa;
  min-height: 100vh;
}

.card {
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.list-group-item {
  transition: background-color 0.2s;
}

.btn-success {
  background-color: #42b883;
  border-color: #42b883;
}

.btn-success:hover {
  background-color: #389d73;
  border-color: #389d73;
}

.btn-outline-success {
  color: #42b883;
  border-color: #42b883;
}

.btn-outline-success:hover {
  background-color: rgba(66, 184, 131, 0.1);
}

.form-check-input:checked {
  background-color: #42b883;
  border-color: #42b883;
}
</style>