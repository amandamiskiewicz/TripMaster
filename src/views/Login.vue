<template>
  <div class="login-page vh-100 d-flex justify-content-center align-items-center p-3" style="background-color: #f8f9fa;">
    <div class="login-card card shadow-sm p-4 p-md-5 w-100" style="max-width: 500px;">
      <div class="text-center mb-4">
        <img src="/icons/icon-192x192.png" alt="TripMaster Logo" class="mb-3" style="width: 80px;">
        <h1 class="text-success mb-3">Welcome Back</h1>
        <p class="text-muted">Sign in to continue to TripMaster</p>
      </div>

      <div v-if="errorMessage" class="alert alert-danger mb-4">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="loginWithEmail" class="mb-4">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input 
            type="email" 
            class="form-control" 
            id="email" 
            v-model="email" 
            required
            placeholder="Enter your email"
          >
        </div>
        <div class="mb-4">
          <label for="password" class="form-label">Password</label>
          <input 
            type="password" 
            class="form-control" 
            id="password" 
            v-model="password" 
            required
            placeholder="Enter your password"
          >
        </div>
        <button type="submit" class="btn btn-success w-100 py-2 mb-3">
          <i class="fas fa-sign-in-alt me-2"></i>Login
        </button>
      </form>

      <div class="text-center mb-4 position-relative">
        <hr class="my-4">
        <span class="px-2 bg-white position-absolute top-50 start-50 translate-middle text-muted">OR</span>
      </div>

      <button @click="loginWithGoogle" class="btn btn-outline-secondary w-100 py-2 mb-3">
        <i class="fab fa-google me-2"></i>Continue with Google
      </button>

      <div class="text-center mt-4">
        <router-link to="/" class="text-decoration-none text-muted">
          <i class="fas fa-arrow-left me-2"></i>Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const loginWithEmail = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push('/home');
      } catch (error) {
        errorMessage.value = 'Login failed. Please check your credentials and try again.';
        console.error('Error during login', error);
      }
    };

    const loginWithGoogle = async () => {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        router.push('/home');
      } catch (error) {
        errorMessage.value = 'Google login failed. Please try again.';
        console.error('Error during Google login', error);
      }
    };

    return {
      email,
      password,
      loginWithEmail,
      loginWithGoogle,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.login-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  overflow: auto;
}

.login-card {
  border: none;
  border-radius: 0.75rem;
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

.btn-outline-secondary {
  border-color: #6c757d;
  color: #6c757d;
}

.btn-outline-secondary:hover {
  background-color: #f8f9fa;
}

.alert {
  border-radius: 0.5rem;
}

@media (max-width: 576px) {
  .login-card {
    padding: 2rem !important;
  }
  
  .login-page {
    padding: 1rem !important;
  }
}
</style>