<template>
  <div class="container py-4">
    <div class="text-center mb-4">
      <h3 class="text-success">Travel Budget - {{ trip.name }}</h3>
    </div>

    <div class="row mb-4 g-3">
      <div class="col-md-4">
        <div class="card text-white h-100 budget-card">
          <div class="card-body text-center">
            <h5 class="card-title">Remaining</h5>
            <p class="card-text display-6">
              {{ remainingBudget }} PLN
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white h-100 budget-card">
          <div class="card-body text-center">
            <h5 class="card-title">Spent</h5>
            <p class="card-text display-6">
              {{ totalSpent }} PLN
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white h-100 budget-card">
          <div class="card-body text-center">
            <h5 class="card-title">Total Budget</h5>
            <div class="d-flex align-items-center justify-content-center">
              <input 
                v-model.number="totalBudget" 
                type="number" 
                class="form-control w-75" 
                @change="updateBudget" 
                placeholder="Enter amount"
                min="0"
              />
              <span class="ms-2">PLN</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-4 border-success">
      <div class="card-body">
        <h4 class="card-title text-success mb-3">Add New Expense</h4>
        <div class="row g-3">
          <div class="col-md-6">
            <input
              v-model="newExpense.name"
              placeholder="Expense Name (required)"
              class="form-control"
              required
            />
          </div>
          <div class="col-md-6">
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
          <div class="col-md-6">
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
          <div class="col-md-6">
            <input
              v-model="newExpense.date"
              type="date"
              class="form-control"
              placeholder="Expense Date (optional)"
            />
          </div>
          <div class="col-12">
            <textarea
              v-model="newExpense.description"
              placeholder="Expense Description (optional)"
              class="form-control"
              rows="2"
            ></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-success px-4" @click="addExpense">Add Expense</button>
            <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="expenses.length" class="card border-success">
      <div class="card-body">
        <h4 class="card-title text-success mb-3">Expenses</h4>
        <div class="list-group">
          <div 
            v-for="(exp, idx) in expenses" 
            :key="exp.id" 
            class="list-group-item expense-item"
            @mousemove="positionTooltip($event)"
            @mouseenter="showTooltip(exp)"
            @mouseleave="hideTooltip"
          >
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
              <div class="mb-2 mb-md-0">
                <strong>{{ exp.name }}</strong> - {{ exp.amount }} PLN
                <div class="text-muted small">
                  <span v-if="exp.persons">
                    Split: {{ exp.persons }} persons ({{ (exp.amount / exp.persons).toFixed(2) }} PLN/person) |
                  </span>
                  <span v-if="exp.paid" class="text-success">Paid</span>
                  <span v-else class="text-danger">Unpaid</span>
                </div>
              </div>
              <div class="d-flex align-items-center mt-2 mt-md-0">
                <div class="form-check me-3">
                  <input 
                    type="checkbox" 
                    v-model="exp.paid" 
                    class="form-check-input" 
                    :id="'paid-' + idx" 
                    @change="updateExpense(exp)" 
                  />
                  <label :for="'paid-' + idx" class="form-check-label">Paid</label>
                </div>
                <button class="btn btn-outline-danger btn-sm" @click="deleteExpense(exp.id)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div 
      v-if="tooltip.visible" 
      class="custom-tooltip"
      :style="{
        top: (tooltip.y - 10) + 'px',
        left: (tooltip.x - 100) + 'px',
        transform: 'translateY(-100%)'
      }"
    >
      <div class="tooltip-content">
        <div v-if="tooltip.data.date"><strong>Date:</strong> {{ tooltip.data.date }}</div>
        <div v-if="tooltip.data.description"><strong>Description:</strong> {{ tooltip.data.description }}</div>
        <div v-if="!tooltip.data.date && !tooltip.data.description">No additional information</div>
      </div>
      <div class="tooltip-arrow-bottom"></div>
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
      totalBudget: null,
      expenses: [],
      newExpense: {
        name: '',
        amount: null,
        persons: null,
        description: '',
        date: '',
        paid: false
      },
      errorMessage: '',
      unsubscribeBudget: null,
      unsubscribeExpenses: null,
      budgetExceeded: false,
      tooltip: {
        visible: false,
        x: 0,
        y: 0,
        data: {
          date: '',
          description: ''
        }
      }
    };
  },
  computed: {
    totalSpent() {
      return this.expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
    },
    remainingBudget() {
      if (this.totalBudget === null) return '0.00';
      const remaining = this.totalBudget - this.totalSpent;
      return remaining.toFixed(2);
    },
    isBudgetExceeded() {
      return this.totalBudget !== null && this.totalSpent > this.totalBudget;
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
    positionTooltip(event) {
      if (this.tooltip.visible) {
        this.tooltip.x = event.clientX;
        this.tooltip.y = event.clientY;
      }
    },
    showTooltip(expense) {
      this.tooltip = {
        visible: true,
        x: 0,
        y: 0,
        data: {
          date: expense.date || '',
          description: expense.description || ''
        }
      };
    },
    hideTooltip() {
      this.tooltip.visible = false;
    },
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
      if ("vibrate" in navigator) {
        navigator.vibrate([300, 50, 300, 50, 300, 50, 600, 50, 600, 50, 600, 50, 300, 50, 300, 50, 300]);
        alert("Budget exceeded! Vibration alert sent!");
      } else {
        alert("Budget exceeded! Your device doesn't support vibration.");
      }
    },
    async loadBudget() {
      this.unsubscribeBudget = onSnapshot(
        doc(db, 'trips', this.trip.id),
        (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            this.totalBudget = data.budget || null;
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
    async addExpense() {
      if (!this.newExpense.name.trim() || this.newExpense.amount === null || this.newExpense.amount <= 0) {
        this.errorMessage = 'Please enter the expense name and a valid amount greater than 0!';
        return;
      }

      try {
        await addDoc(collection(db, 'trips', this.trip.id, 'expenses'), {
          name: this.newExpense.name,
          amount: Number(this.newExpense.amount),
          persons: Number(this.newExpense.persons) || 0,
          description: this.newExpense.description || '',
          date: this.newExpense.date || '',
          paid: false,
          createdAt: new Date()
        });

        this.newExpense = {
          name: '',
          amount: null,
          persons: null,
          description: '',
          date: '',
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
.budget-card {
  background-color: #42b883;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  transition: all 0.3s ease;
}

.budget-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.expense-item {
  cursor: pointer;
  transition: background-color 0.2s;
}

.expense-item:hover {
  background-color: rgba(66, 184, 131, 0.1);
}

.card {
  border-radius: 0.5rem;
}

.card-title {
  font-weight: 600;
}

.form-control {
  border: 1px solid #42b883;
}

.form-control:focus {
  border-color: #42b883;
  box-shadow: 0 0 0 0.25rem rgba(66, 184, 131, 0.25);
}

.btn-success {
  background-color: #42b883;
  border-color: #42b883;
}

.btn-success:hover {
  background-color: #358d73;
  border-color: #358d73;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}

.list-group-item {
  border-left: 3px solid #42b883;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}

.text-success {
  color: #42b883 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.display-6 {
  font-size: 1.75rem;
}

.text-muted {
  color: #6c757d !important;
}

.custom-tooltip {
  position: fixed;
  z-index: 1070;
  background-color: #42b883;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  max-width: 250px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  animation: fadeIn 0.15s ease-out;
}

.tooltip-content div {
  margin: 3px 0;
}

.tooltip-arrow-bottom {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #42b883;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>