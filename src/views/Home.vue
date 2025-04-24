<template>
  <div class="home-page d-flex flex-column justify-content-center align-items-center min-vh-100 p-3 p-md-5">
    <div class="logo-container text-center mb-4">
      <img src="/icons/icon-192x192.png" alt="TripMaster Logo" class="app-logo img-fluid" />
    </div>

    <div class="welcome-text text-center my-4">
      <h1 class="display-4 display-md-3 text-success">TripMaster</h1>
      <p class="slogan lead text-muted">Start your adventure today and make every journey unforgettable!</p>
    </div>

    <div class="auth-buttons d-flex flex-wrap justify-content-center gap-3 mb-4">
      <button @click="goToLogin" class="btn btn-success px-4 py-2">Login</button>
      <button @click="goToRegister" class="btn btn-success px-4 py-2">Register</button>
    </div>

    <div class="info-button">
      <button @click="goToInfo" class="btn btn-outline-success px-4 py-2">Find out more about the app</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'; 

export default {
  name: 'Home',
  setup() {
    const router = useRouter(); 

    const goToLogin = () => {
      router.push('/login');
    };

    const goToRegister = () => {
      router.push('/register');
    };

    const goToInfo = () => {
      router.push('/info'); 
    };

    return {
      goToLogin,
      goToRegister,
      goToInfo,
    };
  },
};
</script>

<style scoped>
.home-page {
  background-color: #f8f9fa;
}

.app-logo {
  max-width: 150px;
  height: auto;
  margin-bottom: 1.5rem;
}

.btn-success {
  background-color: #42b883;
  border-color: #42b883;
  min-width: 120px;
}

.btn-success:hover {
  background-color: #358d73;
  border-color: #358d73;
}

.btn-outline-success {
  color: #42b883;
  border-color: #42b883;
}

.btn-outline-success:hover {
  background-color: rgba(66, 184, 131, 0.1);
}
</style>