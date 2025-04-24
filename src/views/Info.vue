<template>
  <div class="info-page container py-5 text-center">
    <!-- Reszta kodu pozostaje bez zmian -->
    <div class="text-center mb-4">
      <router-link to="/" class="btn btn-outline-success">
        <i class="fas fa-arrow-left me-2"></i>Back to Home
      </router-link>
    </div>

    <div class="card shadow-sm mb-5 mx-auto" style="max-width: 800px;">
      <div class="card-body p-4 p-md-5">
        <h2 class="text-success mb-4">About TripMaster</h2>
        <div class="app-description mx-auto" style="max-width: 700px;">
          <p class="lead">
            Planning a trip can be overwhelming, but with TripMaster, organizing your adventures has never been easier.
          </p>
          <p>
            TripMaster is a comprehensive travel planning app designed to simplify every step of your journey—from choosing a destination to packing your bags.
            Whether you're a spontaneous explorer or a meticulous planner, this app ensures that you can focus on the excitement of travel rather than the hassle of logistics.
          </p>
        </div>
      </div>
    </div>

    <div class="card shadow-sm mx-auto" style="max-width: 800px;">
      <div class="card-body p-4 p-md-5">
        <h2 class="text-success mb-4">Our Team</h2>
        <ul class="list-unstyled authors-list mx-auto" style="max-width: 300px;">
          <li class="mb-3">
            <i class="fas fa-user text-success me-2"></i>Amanda Miśkiewicz
          </li>
          <li class="mb-3">
            <i class="fas fa-user text-success me-2"></i>Julia Mieszaniec
          </li>
          <li class="mb-3">
            <i class="fas fa-user text-success me-2"></i>Jan Paluch
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-page {
  margin: 0 auto;
}


.card {
  border: none;
  border-radius: 0.75rem;
}

.app-description p {
  color: #495057;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.authors-list {
  font-size: 1.1rem;
}

.btn-outline-success {
  border-color: #42b883;
  color: #42b883;
}

.btn-outline-success:hover {
  background-color: rgba(66, 184, 131, 0.1);
}

@media (max-width: 768px) {
  .info-page {
    padding: 2rem 1rem;
  }
  
  .card-body {
    padding: 2rem !important;
  }
}
</style>