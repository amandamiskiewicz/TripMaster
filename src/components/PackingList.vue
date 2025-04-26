<template>
  <div class="container-fluid py-4 px-3 px-md-5">
    <div class="row">
      <div class="col-12">
        <h2 class="mb-4 text-success">Packing List - {{ trip.name }}</h2>

        <div class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="alert alert-success" v-if="successMessage">{{ successMessage }}</div>

        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <div class="categories">
              <div 
                v-for="category in categories" 
                :key="category.id"
                class="category-card"
                :class="{ active: selectedCategory === category.name }"
              >
                <div class="category-content" @click="selectCategory(category.name)">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="mb-2">{{ category.name }}</h3>
                    <button 
                      @click.stop="confirmDeleteCategory(category.id, category.name)"
                      class="btn btn-outline-danger btn-sm"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                  <div class="progress-container">
                    <div class="progress-bar" :style="{ width: getProgress(category) + '%' }"></div>
                  </div>
                  <span class="progress-text">
                    {{ getCheckedCount(category) }}/{{ category.items.length }} items
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <div class="d-flex flex-wrap gap-2 mb-3">
              <button @click="showAddCategory = true" class="btn btn-success px-4 py-2">
                <i class="bi bi-plus-circle"></i> Add New Category
              </button>
              <button 
                @click="showAddItem = true" 
                class="btn btn-outline-success px-4 py-2"
                :disabled="!selectedCategory"
              >
                <i class="bi bi-plus-circle"></i> Add Item to {{ selectedCategory || 'Category' }}
              </button>
            </div>

            <div v-if="showAddCategory" class="add-form mb-3">
              <input 
                v-model="newCategory" 
                placeholder="Enter category name"
                class="form-control form-control-lg mb-2"
                @keyup.enter="addCategory"
              >
              <div class="d-flex gap-2">
                <button @click="addCategory" class="btn btn-success flex-grow-1">
                  <i class="bi bi-check-circle"></i> Add
                </button>
                <button @click="showAddCategory = false" class="btn btn-outline-secondary flex-grow-1">
                  <i class="bi bi-x-circle"></i> Cancel
                </button>
              </div>
            </div>

            <div v-if="showAddItem" class="add-form mb-3">
              <input 
                v-model="newItem" 
                :placeholder="'Add item to ' + selectedCategory"
                class="form-control form-control-lg mb-2"
                @keyup.enter="addItem"
              >
              <div class="d-flex gap-2">
                <button @click="addItem" class="btn btn-success flex-grow-1">
                  <i class="bi bi-check-circle"></i> Add
                </button>
                <button @click="showAddItem = false" class="btn btn-outline-secondary flex-grow-1">
                  <i class="bi bi-x-circle"></i> Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="selectedCategory" class="card shadow-sm">
          <div class="card-body">
            <h4 class="text-success mb-3">{{ selectedCategory }}</h4>
            <div class="items-list">
              <div 
                v-for="item in getCurrentItems()" 
                :key="item.id"
                class="item"
              >
                <label class="item-checkbox">
                  <input 
                    type="checkbox" 
                    v-model="item.checked"
                    @change="updateItem(item)"
                  >
                  <span class="checkmark"></span>
                  <span class="item-name" :class="{ checked: item.checked }">
                    {{ item.name }}
                  </span>
                </label>
                <button @click="deleteItem(item.id)" class="btn btn-outline-danger btn-sm">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showDeleteModal" class="modal-overlay">
      <div class="modal-content">
        <h5>Delete Category</h5>
        <p>Are you sure you want to delete the category "{{ categoryToDeleteName }}"?</p>
        <div class="d-flex gap-2">
          <button @click="deleteCategory" class="btn btn-danger flex-grow-1">
            <i class="bi bi-trash"></i> Delete
          </button>
          <button @click="showDeleteModal = false" class="btn btn-outline-secondary flex-grow-1">
            <i class="bi bi-x-circle"></i> Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import { collection, doc, setDoc, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';

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
      unsubscribe: null,
      errorMessage: '',
      successMessage: '',
      showDeleteModal: false,
      categoryToDeleteId: null,
      categoryToDeleteName: ''
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
        this.errorMessage = "Failed to load packing list";
      }
    },

    selectCategory(name) {
      this.selectedCategory = this.selectedCategory === name ? null : name;
      this.showAddCategory = false;
      this.showAddItem = false;
    },

    async addCategory() {
      if (!this.newCategory.trim()) {
        this.errorMessage = "Please enter a category name";
        return;
      }

      try {
        await setDoc(doc(collection(db, 'trips', this.trip.id, 'packingList')), {
          name: this.newCategory.trim(),
          items: []
        });
        this.newCategory = '';
        this.showAddCategory = false;
        this.errorMessage = '';
        this.successMessage = "Category added successfully!";
        setTimeout(() => this.successMessage = "", 3000);
      } catch (error) {
        console.error("Error adding category:", error);
        this.errorMessage = "Failed to add category";
      }
    },

    async addItem() {
      if (!this.selectedCategory) {
        this.errorMessage = "Please select a category first";
        return;
      }
      
      if (!this.newItem.trim()) {
        this.errorMessage = "Please enter an item name";
        return;
      }

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
        this.errorMessage = '';
        this.successMessage = "Item added successfully!";
        setTimeout(() => this.successMessage = "", 3000);
      } catch (error) {
        console.error("Error adding item:", error);
        this.errorMessage = "Failed to add item";
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
        this.errorMessage = "Failed to update item";
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
        this.successMessage = "Item deleted successfully!";
        setTimeout(() => this.successMessage = "", 3000);
      } catch (error) {
        console.error("Error deleting item:", error);
        this.errorMessage = "Failed to delete item";
      }
    },

    confirmDeleteCategory(id, name) {
      this.categoryToDeleteId = id;
      this.categoryToDeleteName = name;
      this.showDeleteModal = true;
    },
    
    async deleteCategory() {
      try {
        const categoryRef = doc(db, 'trips', this.trip.id, 'packingList', this.categoryToDeleteId);
        await deleteDoc(categoryRef);
        
        if (this.selectedCategory === this.categoryToDeleteName) {
          this.selectedCategory = null;
        }
        
        this.showDeleteModal = false;
        this.categoryToDeleteId = null;
        this.categoryToDeleteName = '';
        this.successMessage = "Category deleted successfully!";
        setTimeout(() => this.successMessage = "", 3000);
      } catch (error) {
        console.error("Error deleting category:", error);
        this.errorMessage = "Failed to delete category";
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
.card {
  border: none;
  border-radius: 12px;
}

.text-success {
  color: #42b883 !important;
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.category-card {
  background: white;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #dee2e6;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.category-card.active {
  background-color: rgba(66, 184, 131, 0.05);
  border: 1px solid #42b883;
}

.category-content h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.progress-container {
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  margin: 8px 0 5px 0;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #42b883;
  border-radius: 3px;
  transition: width 0.3s;
}

.progress-text {
  font-size: 0.8rem;
  color: #666;
}

.items-list {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #dee2e6;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: white;
  border-bottom: 1px solid #f5f5f5;
  transition: background-color 0.2s;
}

.item:hover {
  background-color: #f9f9f9;
}

.item:last-child {
  border-bottom: none;
}

.item-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
}

.item-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: relative;
  height: 20px;
  width: 20px;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-right: 12px;
  transition: all 0.2s;
}

.item-checkbox input:checked ~ .checkmark {
  background-color: #42b883;
  border-color: #42b883;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.item-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.item-name {
  color: #333;
  transition: all 0.2s;
}

.item-name.checked {
  color: #999;
  text-decoration: line-through;
}

.btn-success {
  background-color: #42b883;
  border-color: #42b883;
}

.btn-success:hover {
  background-color: #358d73;
  border-color: #358d73;
}

.btn-outline-success {
  color: #42b883;
  border-color: #42b883;
}

.btn-outline-success:hover {
  background-color: rgba(66, 184, 131, 0.1);
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: rgba(220, 53, 69, 0.1);
}

.form-control, .form-select {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 10px 15px;
}

.form-control:focus, .form-select:focus {
  border-color: #42b883;
  box-shadow: 0 0 0 0.2rem rgba(66, 184, 131, 0.25);
}

.alert {
  margin-bottom: 1rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-content h5 {
  margin-top: 0;
  color: #333;
}

.modal-content p {
  margin-bottom: 20px;
  color: #666;
}

@media (max-width: 768px) {
  .categories {
    grid-template-columns: 1fr;
  }
  
  .d-flex {
    flex-direction: column;
  }
  
  .btn, .form-control {
    width: 100%;
  }
}
</style>