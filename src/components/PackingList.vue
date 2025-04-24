<template>
  <div class="packing-list">
    <div class="header">
      <h2>Packing List - {{ trip.name }}</h2>
      <button @click="$emit('close')" class="close-btn" aria-label="Close packing list">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="categories">
      <div 
        v-for="category in categories" 
        :key="category.id"
        class="category-card"
        :class="{ active: selectedCategory === category.name }"
        @click="selectCategory(category.name)"
      >
        <div class="category-content">
          <h3>{{ category.name }}</h3>
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: getProgress(category) + '%' }"></div>
          </div>
          <span class="progress-text">
            {{ getCheckedCount(category) }}/{{ category.items.length }} items
          </span>
        </div>
      </div>
    </div>

    <div class="actions">
      <button @click="showAddCategory = true" class="action-btn primary" aria-label="Add new category">
        <i class="fas fa-plus"></i> Add New Category
      </button>
      <button 
        @click="showAddItem = true" 
        class="action-btn secondary"
        :disabled="!selectedCategory"
        aria-label="Add new item to selected category"
      >
        <i class="fas fa-plus"></i> Add Item to {{ selectedCategory || 'Category' }}
      </button>
    </div>

    <div v-if="showAddCategory" class="add-form">
      <input 
        v-model="newCategory" 
        placeholder="Enter category name"
        class="form-input"
        @keyup.enter="addCategory"
        aria-label="Category name input"
      >
      <div class="form-actions">
        <button @click="addCategory" class="form-btn confirm" aria-label="Confirm adding category">
          <i class="fas fa-check"></i> Add
        </button>
        <button @click="showAddCategory = false" class="form-btn cancel" aria-label="Cancel adding category">
          <i class="fas fa-times"></i> Cancel
        </button>
      </div>
    </div>

    <div v-if="showAddItem" class="add-form">
      <input 
        v-model="newItem" 
        :placeholder="'Add item to ' + selectedCategory"
        class="form-input"
        @keyup.enter="addItem"
        aria-label="Item name input"
      >
      <div class="form-actions">
        <button @click="addItem" class="form-btn confirm" aria-label="Confirm adding item">
          <i class="fas fa-check"></i> Add
        </button>
        <button @click="showAddItem = false" class="form-btn cancel" aria-label="Cancel adding item">
          <i class="fas fa-times"></i> Cancel
        </button>
      </div>
    </div>

    <div v-if="selectedCategory" class="items-section">
      <h3>{{ selectedCategory }}</h3>
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
              :aria-label="(item.checked ? 'Unpack ' : 'Pack ') + item.name"
            >
            <span class="checkmark"></span>
            <span class="item-name" :class="{ checked: item.checked }">
              {{ item.name }}
            </span>
          </label>
          <button @click="deleteItem(item.id)" class="delete-btn" :aria-label="'Delete ' + item.name">
            <i class="fas fa-trash"></i>
          </button>
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.header h2 {
  color: #333;
  margin: 0;
}

.close-btn {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
}

.close-btn:hover {
  background: #e9e9e9;
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.category-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-card.active {
  border-color: #42b883;
  background-color: rgba(66, 184, 131, 0.05);
}

.category-content h3 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  color: #333;
}

.progress-container {
  height: 6px;
  background: #f0f0f0;
  border-radius: 3px;
  margin-bottom: 5px;
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

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.action-btn {
  padding: 10px 15px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-btn.primary {
  background: #42b883;
  color: white;
  border: none;
}

.action-btn.primary:hover {
  background: #389d73;
}

.action-btn.secondary {
  background: white;
  color: #42b883;
  border: 1px solid #42b883;
}

.action-btn.secondary:hover {
  background: #f0f9f5;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f5f5f5;
  color: #999;
  border-color: #ddd;
}

.add-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.form-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #42b883;
}

.form-actions {
  display: flex;
  gap: 5px;
}

.form-btn {
  padding: 10px 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  gap: 5px;
}

.form-btn.confirm {
  background: #42b883;
  color: white;
}

.form-btn.confirm:hover {
  background: #389d73;
}

.form-btn.cancel {
  background: #f5f5f5;
  color: #666;
}

.form-btn.cancel:hover {
  background: #e9e9e9;
}

.items-section {
  margin-top: 30px;
}

.items-section h3 {
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.items-list {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: white;
  border-bottom: 1px solid #f5f5f5;
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

.delete-btn {
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  transition: all 0.2s;
}

.delete-btn:hover {
  color: #ff3b3b;
}

@media (max-width: 600px) {
  .categories {
    grid-template-columns: 1fr;
  }
  
  .actions {
    flex-direction: column;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .form-btn {
    width: 100%;
  }
}
</style>