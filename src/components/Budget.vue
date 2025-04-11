<template>
  <div class="container py-4">
    <h3>Budżet podróży - {{ trip.name }}</h3>

    <!-- Sekcja z podsumowaniem budżetu -->
    <div class="row mb-4">
      <div class="col-md-4">
        <div class="card text-white bg-success mb-3">
          <div class="card-body">
            <h5 class="card-title">Pozostało</h5>
            <p class="card-text">
              {{ remainingBudget }} PLN
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white bg-danger mb-3">
          <div class="card-body">
            <h5 class="card-title">Wydatki</h5>
            <p class="card-text">
              {{ totalSpent }} PLN
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white bg-info mb-3">
          <div class="card-body">
            <h5 class="card-title">Całkowity budżet</h5>
            <input v-model.number="totalBudget" type="number" class="form-control" /> PLN
          </div>
        </div>
      </div>
    </div>

    <!-- Formularz dodawania wydatku -->
    <div class="mb-4">
      <h4>Dodaj nowy wydatek</h4>
      <div class="mb-2">
        <input
          v-model="newExpense.name"
          placeholder="Nazwa wydatku (wymagane)"
          class="form-control"
        />
      </div>
      <div class="mb-2">
        <input
          v-model.number="newExpense.amount"
          placeholder="Kwota wydatku (PLN, wymagana)"
          type="number"
          class="form-control"
        />
      </div>
      <div class="mb-2">
        <input
          v-model.number="newExpense.persons"
          placeholder="Liczba osób do podziału (opcjonalnie)"
          type="number"
          class="form-control"
        />
        <small class="text-muted" v-if="newExpense.persons > 0">
          Równy podział: {{ (newExpense.amount / newExpense.persons).toFixed(2) }} PLN na osobę
        </small>
      </div>
      <div class="mb-2">
        <input
          v-model="newExpense.description"
          placeholder="Opis wydatku (opcjonalnie)"
          class="form-control"
        />
      </div>
      <div class="mb-2">
        <input
          v-model="newExpense.date"
          type="date"
          class="form-control"
          placeholder="Data wydatku (opcjonalnie)"
        />
      </div>
      <div class="mb-2">
        <input
          type="file"
          @change="handleFileUpload"
          class="form-control"
        />
        <small class="text-muted">Załącz zdjęcie/plik (opcjonalnie)</small>
      </div>
      <button class="btn btn-primary" @click="addExpense">Dodaj wydatek</button>
    </div>

    <!-- Lista wydatków -->
    <div v-if="expenses.length">
      <h4>Wydatki</h4>
      <ul class="list-group">
        <li v-for="(exp, idx) in expenses" :key="idx" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <strong>{{ exp.name }}</strong> - {{ exp.amount }} PLN
              <div class="text-muted">
                <span v-if="exp.date">Data: {{ exp.date }} | </span>
                <span v-if="exp.description">Opis: {{ exp.description }} | </span>
                <span v-if="exp.persons">
                  Podzielone między: {{ exp.persons }} ({{ (exp.amount / exp.persons).toFixed(2) }} PLN/os.) |
                </span>
              </div>
              <div v-if="exp.file">
                <a :href="exp.file" target="_blank">Zobacz załącznik</a>
              </div>
            </div>
            <div class="form-check">
              <input type="checkbox" v-model="exp.paid" class="form-check-input" :id="'paid-' + idx" />
              <label :for="'paid-' + idx" class="form-check-label">Opłacone</label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetPlanner',
  props: ['trip'],
  data() {
    return {
      totalBudget: 0,  // Możliwość edycji budżetu
      expenses: [],
      newExpense: {
        name: '',
        amount: 0,
        persons: 0, // Opcjonalnie liczba osób do podziału kwoty
        description: '',
        date: '',
        file: null,
        paid: false
      }
    };
  },
  computed: {
    totalSpent() {
      return this.expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
    },
    remainingBudget() {
      const remaining = this.totalBudget - this.totalSpent;
      return remaining.toFixed(2);
    }
  },
  methods: {
    handleFileUpload(e) {
      const file = e.target.files[0];
      if (file) {
        this.newExpense.file = URL.createObjectURL(file);
      }
    },
    addExpense() {
      // Sprawdzenie, czy wymagane pola zostały wypełnione
      if (this.newExpense.name.trim() && this.newExpense.amount > 0) {
        this.expenses.push({ ...this.newExpense });
        // Reset formularza wydatku
        this.newExpense = {
          name: '',
          amount: 0,
          persons: 0,
          description: '',
          date: '',
          file: null,
          paid: false
        };
      } else {
        alert('Wprowadź nazwę wydatku i kwotę większą od 0!');
      }
    }
  }
};
</script>

<style scoped>
.card-text {
  font-size: 1.25rem;
}
.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
