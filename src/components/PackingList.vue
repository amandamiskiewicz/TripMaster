<template>
  <div class="container py-4">
    <h3>Lista pakowania - {{ trip.name }}</h3>

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
              Do odhaczenia: {{ countRemaining(category.name) }} / {{ category.items.length }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Dodawanie nowej kategorii lub rzeczy -->
    <div class="mb-4 d-flex gap-3">
      <button class="btn btn-primary" @click="showAddCategory = true">Dodaj kategorię</button>
      <button class="btn btn-success" @click="showAddItem = true" :disabled="!selectedCategory">Dodaj rzecz do {{ selectedCategory }}</button>
    </div>

    <!-- Formularz dodawania kategorii -->
    <div v-if="showAddCategory" class="mb-3">
      <input v-model="newCategory" placeholder="Nazwa kategorii" class="form-control w-50 d-inline" />
      <button class="btn btn-secondary ms-2" @click="addCategory">Dodaj</button>
    </div>

    <!-- Formularz dodawania rzeczy -->
    <div v-if="showAddItem && selectedCategory" class="mb-3">
      <input v-model="newItem" placeholder="Nazwa rzeczy" class="form-control w-50 d-inline" />
      <button class="btn btn-secondary ms-2" @click="addItem">Dodaj</button>
    </div>

    <!-- Lista rzeczy w wybranej kategorii -->
    <div v-if="selectedCategory">
      <h4>Rzeczy w kategorii: {{ selectedCategory }}</h4>
      <ul class="list-group w-75">
        <li v-for="(item, idx) in getItemsForCategory(selectedCategory)" :key="idx" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input type="checkbox" v-model="item.checked" class="form-check-input me-2" />
            <span :class="{ 'text-decoration-line-through': item.checked }">{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackingList',
  props: ['trip'],
  data() {
    return {
      categories: [
        { name: 'Clothing', items: [] },
        { name: 'Essentials', items: [] },
        { name: 'Toiletries', items: [] },
        { name: 'Other', items: [] }
      ],
      selectedCategory: null,
      showAddCategory: false,
      showAddItem: false,
      newCategory: '',
      newItem: ''
    };
  },
  methods: {
    selectCategory(name) {
      this.selectedCategory = name;
      this.showAddItem = false;
    },
    addCategory() {
      if (this.newCategory.trim()) {
        this.categories.push({ name: this.newCategory.trim(), items: [] });
        this.newCategory = '';
        this.showAddCategory = false;
      }
    },
    addItem() {
      const category = this.categories.find(cat => cat.name === this.selectedCategory);
      if (category && this.newItem.trim()) {
        category.items.push({ name: this.newItem.trim(), checked: false });
        this.newItem = '';
        this.showAddItem = false;
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