<template>
  <div class="container py-4">
    <h3>Reservations - {{ trip.name }}</h3>

    <div class="mb-3">
      <input v-model="newReservation.name" placeholder="Reservation name (e.g. Flight to Paris)" class="form-control mb-2" />
      <input v-model="newReservation.link" placeholder="Reservation link (optional)" class="form-control mb-2" />
      <input type="file" @change="handleFileUpload" class="form-control mb-2" />
      <button class="btn btn-primary" @click="addReservation">Add Reservation</button>
    </div>

    <div v-if="reservations.length">
      <h4>Reservations List</h4>
      <ul class="list-group">
        <li v-for="(res, idx) in reservations" :key="idx" class="list-group-item">
          <strong>{{ res.name }}</strong>
          <div v-if="res.link">
            <a :href="res.link" target="_blank">Open Link</a>
          </div>
          <div v-if="res.file">
            <a :href="res.file" target="_blank">View Attachment</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reservations',
  props: ['trip'],
  data() {
    return {
      newReservation: {
        name: '',
        link: '',
        file: null
      },
      reservations: []
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.newReservation.file = URL.createObjectURL(file);
      }
    },
    addReservation() {
      if (this.newReservation.name.trim()) {
        this.reservations.push({
          name: this.newReservation.name.trim(),
          link: this.newReservation.link.trim(),
          file: this.newReservation.file
        });
        this.newReservation = { name: '', link: '', file: null };
      }
    }
  }
};
</script>

<style scoped>
.list-group-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>
