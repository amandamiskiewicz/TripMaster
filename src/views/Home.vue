<template>
  <div class="home-page d-flex flex-column justify-content-center align-items-center min-vh-100">
    <div class="logo-container text-center mb-4">
      <img src="/icons/icon-192x192.png" alt="TripMaster Logo" class="app-logo" />
    </div>

    <div class="welcome-text text-center my-2">
      <h1>TripMaster</h1>
      <p class="slogan">Start your adventure today and make every journey unforgettable!</p>
    </div>

    <div class="auth-buttons">
      <button @click="goToLogin">Login</button>
      <button @click="goToRegister">Register</button>
    </div>

    <div class="info-button">
      <button @click="goToInfo">Find out more about the app and authors</button>
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
  text-align: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.app-logo {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}

.welcome-text {
  margin-bottom: 40px;
}

h1 {
  font-size: 3em;
  color: #42b883;
}

.slogan {
  font-size: 1.5em;
  font-weight: 300;
  color: #666;
}

.auth-buttons button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
}

.auth-buttons button:hover {
  background-color: #358d73;
}

.info-button button {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f1f1f1;
  color: #42b883;
  border: 1px solid #42b883;
  cursor: pointer;
}

.info-button button:hover {
  background-color: #e1e1e1;
}
</style>
