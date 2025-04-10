<template>
  <div class="container">
    <h3>Budżet podróży</h3>
    <form @submit.prevent="addExpense">
      <div class="mb-3">
        <label for="expenseCategory" class="form-label">Kategoria</label>
        <input v-model="newExpense.category" type="text" id="expenseCategory" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="expenseAmount" class="form-label">Kwota</label>
        <input v-model="newExpense.amount" type="number" id="expenseAmount" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Dodaj wydatki</button>
    </form>
    <div v-for="(expense, index) in expenses" :key="index" class="alert alert-success mt-3">
      <p>{{ expense.category }}: {{ expense.amount }} zł</p>
    </div>
    <button class="btn btn-secondary mt-3" @click="$emit('close')">Zamknij</button>
  </div>
</template>

<script>
export default {
  name: 'Budget',
  props: ['trip'],
  data() {
    return {
      newExpense: {
        category: '',
        amount: 0
      },
      expenses: []
    };
  },
  methods: {
    addExpense() {
      this.expenses.push({ ...this.newExpense });
      this.newExpense.category = '';
      this.newExpense.amount = 0;
    }
  }
}
</script>
