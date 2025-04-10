<template>
  <div class="container">
    <h3>Rezerwacje</h3>
    <form @submit.prevent="addReservation">
      <div class="mb-3">
        <label for="reservationType" class="form-label">Typ rezerwacji</label>
        <input v-model="newReservation.type" type="text" id="reservationType" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="reservationDate" class="form-label">Data rezerwacji</label>
        <input v-model="newReservation.date" type="date" id="reservationDate" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="reservationImage" class="form-label">Zdjęcie (opcjonalnie)</label>
        <input type="file" @change="onImageChange" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Dodaj rezerwację</button>
    </form>
    <div v-for="(reservation, index) in reservations" :key="index" class="alert alert-info mt-3">
      <p>{{ reservation.type }} - {{ reservation.date }}</p>
      <img v-if="reservation.image" :src="reservation.image" alt="Rezerwacja" width="100" />
    </div>
    <button class="btn btn-secondary mt-3" @click="$emit('close')">Zamknij</button>
  </div>
</template>

<script>
export default {
  name: 'Reservations',
  props: ['trip'],
  data() {
    return {
      newReservation: {
        type: '',
        date: '',
        image: null
      },
      reservations: []
    };
  },
  methods: {
    addReservation() {
      this.reservations.push({ ...this.newReservation });
      this.newReservation.type = '';
      this.newReservation.date = '';
      this.newReservation.image = null;
    },
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.newReservation.image = URL.createObjectURL(file);
      }
    }
  }
}
</script>
