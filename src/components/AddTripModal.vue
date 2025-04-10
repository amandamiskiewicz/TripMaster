<template>
  <div class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5)">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Dodaj podróż</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="country" class="form-label">Kraj</label>
              <select v-model="newTrip.country" id="country" class="form-select">
                <option value="Włochy">Włochy</option>
                <option value="Hiszpania">Hiszpania</option>
                <option value="Francja">Francja</option>
                <!-- Dodaj więcej krajów jeśli chcesz -->
              </select>
            </div>
            <div class="mb-3">
              <label for="name" class="form-label">Nazwa podróży</label>
              <input v-model="newTrip.name" type="text" id="name" class="form-control" required />
            </div>
            <div class="mb-3">
              <label for="departureDate" class="form-label">Data wyjazdu (opcjonalnie)</label>
              <input v-model="newTrip.departureDate" type="date" id="departureDate" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="arrivalDate" class="form-label">Data przyjazdu (opcjonalnie)</label>
              <input v-model="newTrip.arrivalDate" type="date" id="arrivalDate" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Dodaj podróż</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTripModal',
  data() {
    return {
      newTrip: {
        country: '',
        name: '',
        departureDate: '',
        arrivalDate: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('add-trip', { 
        ...this.newTrip, 
        id: Date.now() // Emitowanie nowej podróży z unikalnym ID
      });
      this.closeModal();
    },
    closeModal() {
      this.$emit('close'); // Zamykanie modala
    }
  }
}
</script>

<style scoped>
.modal-content {
  max-width: 500px;
  margin: auto;
}
</style>
