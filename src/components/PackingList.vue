<template>
  <div class="container">
    <h3>Lista pakowania</h3>
    <form @submit.prevent="addItem">
      <div class="mb-3">
        <label for="item" class="form-label">Przedmiot</label>
        <input v-model="newItem" type="text" id="item" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Dodaj przedmiot</button>
    </form>
    <ul class="list-group mt-3">
      <li v-for="(item, index) in packingList" :key="index" class="list-group-item">
        {{ item }}
      </li>
    </ul>
    <button class="btn btn-secondary mt-3" @click="$emit('close')">Zamknij</button>
  </div>
</template>

<script>
export default {
  name: 'PackingList',
  props: ['trip'],
  data() {
    return {
      packingList: ['Koszulki', 'Spodnie'],
      newItem: ''
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.packingList.push(this.newItem);
        this.newItem = '';
      }
    }
  }
}
</script>
