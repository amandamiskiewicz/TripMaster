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
            <input v-model.number="totalBudget" type="number" class="form-control" @change="updateBudget" /> PLN
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
          required
        />
      </div>
      <div class="mb-2">
        <input
          v-model.number="newExpense.amount"
          placeholder="Expense Amount (PLN, required)"
          type="number"
          class="form-control"
          required
          min="0"
          step="0.01"
        />
      </div>
      <div class="mb-2">
        <input
          v-model.number="newExpense.persons"
          placeholder="Number of persons to split (optional)"
          type="number"
          class="form-control"
          min="0"
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
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>

    <!-- Expense List -->
    <div v-if="expenses.length">
      <h4>Expenses</h4>
      <ul class="list-group">
        <li v-for="(exp, idx) in expenses" :key="exp.id" class="list-group-item">
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
              <input type="checkbox" v-model="exp.paid" class="form-check-input" :id="'paid-' + idx" @change="updateExpense(exp)" />
              <label :for="'paid-' + idx" class="form-check-label">Paid</label>
            </div>
            <button class="btn btn-danger btn-sm" @click="deleteExpense(exp.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default {
  name: 'BudgetPlanner',
  props: ['trip'],
  data() {
    return {
      totalBudget: 0,
      expenses: [],
      newExpense: {
        name: '',
        amount: 0,
        persons: 0,
        description: '',
        date: '',
        file: null,
        paid: false
      },
      errorMessage: '',
      unsubscribeBudget: null,
      unsubscribeExpenses: null,
      budgetExceeded: false
    };
  },
  computed: {
    totalSpent() {
      return this.expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
    },
    remainingBudget() {
      const remaining = this.totalBudget - this.totalSpent;
      return remaining.toFixed(2);
    },
    isBudgetExceeded() {
      return this.totalSpent > this.totalBudget;
    }
  },
  watch: {
    isBudgetExceeded(newVal) {
      if (newVal && !this.budgetExceeded) {
        this.showSOS();
      }
      this.budgetExceeded = newVal;
    }
  },
  created() {
    this.registerServiceWorker();
    this.loadBudget();
    this.loadExpenses();
  },
  beforeUnmount() {
    if (this.unsubscribeBudget) this.unsubscribeBudget();
    if (this.unsubscribeExpenses) this.unsubscribeExpenses();
  },
  methods: {
    registerServiceWorker() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          console.log('Service Worker registered with scope:', registration.scope);
        }).catch(function(error) {
          console.error('Service Worker registration failed:', error);
        });
      }
    },
    
    showSOS() {
      console.log("showSOS triggered!");
      if ("vibrate" in navigator) {
        console.log("Vibration supported! Sending SOS pattern...");
        navigator.vibrate([300, 50, 300, 50, 300, 50, 600, 50, 600, 50, 600, 50, 300, 50, 300, 50, 300]);
        alert("Przekroczono budżet! Wibracje zostały wysłane!");
      } else {
        console.warn("Vibration API not supported on this device.");
        alert("Przekroczono budżet! Twoje urządzenie nie obsługuje wibracji.");
      }
    },

    async loadBudget() {
      this.unsubscribeBudget = onSnapshot(
        doc(db, 'trips', this.trip.id),
        (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            this.totalBudget = data.budget || 0;
          }
        },
        (error) => {
          console.error("Error loading budget:", error);
          this.errorMessage = "Failed to load budget";
        }
      );
    },
    
    async updateBudget() {
      try {
        await updateDoc(doc(db, 'trips', this.trip.id), {
          budget: this.totalBudget
        });
      } catch (error) {
        console.error("Error updating budget:", error);
        this.errorMessage = "Failed to update budget";
      }
    },

    loadExpenses() {
      this.unsubscribeExpenses = onSnapshot(
        collection(db, 'trips', this.trip.id, 'expenses'),
        (snapshot) => {
          this.expenses = [];
          snapshot.forEach((doc) => {
            this.expenses.push({
              id: doc.id,
              ...doc.data()
            });
          });
        },
        (error) => {
          console.error("Error loading expenses:", error);
          this.errorMessage = "Failed to load expenses";
        }
      );
    },

    handleFileUpload(e) {
      const file = e.target.files[0];
      if (file) {
        this.newExpense.file = URL.createObjectURL(file);
      }
    },

    async addExpense() {
      if (!this.newExpense.name.trim() || this.newExpense.amount <= 0) {
        this.errorMessage = 'Please enter the expense name and an amount greater than 0!';
        return;
      }

      try {
        await addDoc(collection(db, 'trips', this.trip.id, 'expenses'), {
          name: this.newExpense.name,
          amount: Number(this.newExpense.amount),
          persons: Number(this.newExpense.persons) || 0,
          description: this.newExpense.description || '',
          date: this.newExpense.date || '',
          file: this.newExpense.file || null,
          paid: false,
          createdAt: new Date()
        });

        // Reset form
        this.newExpense = {
          name: '',
          amount: 0,
          persons: 0,
          description: '',
          date: '',
          file: null,
          paid: false
        };
        this.errorMessage = '';
      } catch (error) {
        console.error("Error adding expense:", error);
        this.errorMessage = "Failed to add expense";
      }
    },

    async updateExpense(expense) {
      try {
        await updateDoc(doc(db, 'trips', this.trip.id, 'expenses', expense.id), {
          paid: expense.paid
        });
      } catch (error) {
        console.error("Error updating expense:", error);
        this.errorMessage = "Failed to update expense";
      }
    },

    async deleteExpense(expenseId) {
      try {
        await deleteDoc(doc(db, 'trips', this.trip.id, 'expenses', expenseId));
      } catch (error) {
        console.error("Error deleting expense:", error);
        this.errorMessage = "Failed to delete expense";
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
.error {
  color: red;
  margin-top: 10px;
}
</style>