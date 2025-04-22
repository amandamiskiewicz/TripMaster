<template>
  <div class="container py-4">
    <h3>Packing List - {{ trip.name }}</h3>

    <div class="row mb-4">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="col-md-3 mb-3"
      >
        <div class="card h-100" @click="selectCategory(category.name)" style="cursor: pointer;">
          <div class="card-body text-center">
            <h5 class="card-title">{{ category.name }}</h5>
            <p class="card-text">
              checked off: {{ countRemaining(category.name) }} / {{ category.items.length }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Adding a new category or item -->
    <div class="mb-4 d-flex gap-3">
      <button class="btn btn-primary" @click="showAddCategory = true">Add Category</button>
      <button class="btn btn-success" @click="showAddItem = true" :disabled="!selectedCategory">Add Item {{ selectedCategory }}</button>
    </div>

    <!-- Add Category Form -->
    <div v-if="showAddCategory" class="mb-3">
      <input v-model="newCategory" placeholder="Category Name" class="form-control w-50 d-inline" />
      <button class="btn btn-secondary ms-2" @click="addCategory">Add</button>
    </div>

    <!-- Add Item Form -->
    <div v-if="showAddItem && selectedCategory" class="mb-3">
      <input v-model="newItem" placeholder="Item Name" class="form-control w-50 d-inline" />
      <button class="btn btn-secondary ms-2" @click="addItem">Add</button>
    </div>

    <!-- List of Items in the Selected Category -->
    <div v-if="selectedCategory">
      <h4>Items in Category: {{ selectedCategory }}</h4>
      <ul class="list-group w-75">
        <li v-for="(item, idx) in getItemsForCategory(selectedCategory)" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input type="checkbox" v-model="item.checked" class="form-check-input me-2" @change="updateItem(item)" />
            <span :class="{ 'text-decoration-line-through': item.checked }">{{ item.name }}</span>
          </div>
          <button class="btn btn-sm btn-danger" @click="deleteItem(item.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import { collection, doc, setDoc, getDocs, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';

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
    if (this.unsubscribe) this.unsubscribe();
  },
  methods: {
    async loadPackingList() {
      try {
        const packingListRef = collection(db, 'trips', this.trip.id, 'packingList');
        this.unsubscribe = onSnapshot(packingListRef, (snapshot) => {
          this.categories = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            this.categories.push({
              id: doc.id,
              name: data.name,
              items: data.items || []
            });
          });
        });
      } catch (error) {
        console.error("Error loading packing list:", error);
      }
    },

    async selectCategory(name) {
      this.selectedCategory = name;
      this.showAddItem = false;
    },

    async addCategory() {
      if (!this.newCategory.trim()) return;

      try {
        const newCategoryRef = doc(collection(db, 'trips', this.trip.id, 'packingList'));
        await setDoc(newCategoryRef, {
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
        // Znajdź kategorię w lokalnej tablicy
        const category = this.categories.find(c => c.name === this.selectedCategory);
        if (!category) return;

        // Znajdź referencję do dokumentu kategorii w Firestore
        const categoryQuery = await getDocs(
          collection(db, 'trips', this.trip.id, 'packingList')
        );
        const categoryDoc = categoryQuery.docs.find(doc => doc.data().name === this.selectedCategory);
        
        if (!categoryDoc) return;

        // Przygotuj nową listę przedmiotów
        const updatedItems = [
          ...categoryDoc.data().items,
          {
            id: Date.now().toString(),
            name: this.newItem.trim(),
            checked: false
          }
        ];

        // Zaktualizuj dokument w Firestore
        await updateDoc(doc(db, 'trips', this.trip.id, 'packingList', categoryDoc.id), {
          items: updatedItems
        });

        this.newItem = '';
        this.showAddItem = false;
      } catch (error) {
        console.error("Error adding item:", error);
      }
    },

    async updateItem(item) {
      try {
        // Znajdź kategorię zawierającą ten przedmiot
        const category = this.categories.find(c => 
          c.items.some(i => i.id === item.id)
        );
        if (!category) return;

        // Znajdź dokument kategorii w Firestore
        const categoryQuery = await getDocs(
          collection(db, 'trips', this.trip.id, 'packingList')
        );
        const categoryDoc = categoryQuery.docs.find(doc => doc.id === category.id);
        
        if (!categoryDoc) return;

        // Zaktualizuj dokument
        await updateDoc(doc(db, 'trips', this.trip.id, 'packingList', categoryDoc.id), {
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

        const updatedItems = category.items.filter(item => item.id !== itemId);
        const categoryRef = doc(db, 'trips', this.trip.id, 'packingList', category.id);
        
        await updateDoc(categoryRef, {
          items: updatedItems
        });
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    },

    getItemsForCategory(name) {
      const category = this.categories.find(cat => cat.name === name);
      return category ? category.items : [];
    },

    countRemaining(name) {
      const category = this.categories.find(cat => cat.name === name);
      return category ? category.items.filter(item => !item.checked).length : 0;
    }
  }
};
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.03);
}
</style>