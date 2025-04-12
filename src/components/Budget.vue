<template>
  <div class="container py-4">
    <h3>Travel Budget - {{ trip.name }}</h3>

    <!-- Budget Summary Section -->
    <div class="row mb-4">
      <div class="col-md-4">
        <div class="card text-white bg-success mb-3">
          <div class="card-body">
            <h5 class="card-title">Remaining</h5>
            <p class="card-text">
              {{ remainingBudget }} PLN
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white bg-danger mb-3">
          <div class="card-body">
            <h5 class="card-title">Spent</h5>
            <p class="card-text">
              {{ totalSpent }} PLN
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white bg-info mb-3">
          <div class="card-body">
            <h5 class="card-title">Total Budget</h5>
            <input v-model.number="totalBudget" type="number" class="form-control" /> PLN
          </div>
        </div>
      </div>
    </div>

    <!-- Add Expense Form -->
    <div class="mb-4">
      <h4>Add New Expense</h4>
      <div class="mb-2">
        <input
          v-model="newExpense.name"
          placeholder="Expense Name (required)"
          class="form-control"
        />
      </div>
      <div class="mb-2">
        <input
          v-model.number="newExpense.amount"
          placeholder="Expense Amount (PLN, required)"
          type="number"
          class="form-control"
        />
      </div>
      <div class="mb-2">
        <input
          v-model.number="newExpense.persons"
          placeholder="Number of persons to split (optional)"
          type="number"
          class="form-control"
        />
        <small class="text-muted" v-if="newExpense.persons > 0">
          Even split: {{ (newExpense.amount / newExpense.persons).toFixed(2) }} PLN per person
        </small>
      </div>
      <div class="mb-2">
        <input
          v-model="newExpense.description"
          placeholder="Expense Description (optional)"
          class="form-control"
        />
      </div>
      <div class="mb-2">
        <input
          v-model="newExpense.date"
          type="date"
          class="form-control"
          placeholder="Expense Date (optional)"
        />
      </div>
      <div class="mb-2">
        <input
          type="file"
          @change="handleFileUpload"
          class="form-control"
        />
        <small class="text-muted">Attach photo/file (optional)</small>
      </div>
      <button class="btn btn-primary" @click="addExpense">Add Expense</button>
    </div>

    <!-- Expense List -->
    <div v-if="expenses.length">
      <h4>Expenses</h4>
      <ul class="list-group">
        <li v-for="(exp, idx) in expenses" :key="idx" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <strong>{{ exp.name }}</strong> - {{ exp.amount }} PLN
              <div class="text-muted">
                <span v-if="exp.date">Date: {{ exp.date }} | </span>
                <span v-if="exp.description">Description: {{ exp.description }} | </span>
                <span v-if="exp.persons">
                  Split between: {{ exp.persons }} ({{ (exp.amount / exp.persons).toFixed(2) }} PLN/person) |
                </span>
              </div>
              <div v-if="exp.file">
                <a :href="exp.file" target="_blank">View Attachment</a>
              </div>
            </div>
            <div class="form-check">
              <input type="checkbox" v-model="exp.paid" class="form-check-input" :id="'paid-' + idx" />
              <label :for="'paid-' + idx" class="form-check-label">Paid</label>
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
      totalBudget: 0,  // Budget editing capability
      expenses: [],
      newExpense: {
        name: '',
        amount: '',
        persons: '', // Optional number of persons to split the amount
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
      // Check if required fields are filled
      if (this.newExpense.name.trim() && this.newExpense.amount > 0) {
        this.expenses.push({ ...this.newExpense });
        // Reset the expense form
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
        alert('Please enter the expense name and an amount greater than 0!');
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
