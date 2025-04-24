<template>
  <div class="register-page vh-100 d-flex justify-content-center align-items-center p-3" style="background-color: #f8f9fa;">
    <div class="register-card card shadow-sm p-4 p-md-5 w-100" style="max-width: 500px;">
      <div class="text-center mb-4">
        <img src="/icons/icon-192x192.png" alt="TripMaster Logo" class="mb-3" style="width: 80px;">
        <h2 class="text-success mb-3">Create Account</h2>
        <p class="text-muted">Join TripMaster to start planning your adventures</p>
      </div>

      <div v-if="errorMessage" class="alert alert-danger mb-4">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="registerUser" class="mb-4">
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
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input 
            type="password" 
            class="form-control" 
            id="password" 
            v-model="password" 
            required
            placeholder="Create a password"
          >
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <input 
            type="password" 
            class="form-control" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            required
            placeholder="Confirm your password"
          >
        </div>
        <button type="submit" class="btn btn-success w-100 py-2 mb-3">
          <i class="fas fa-user-plus me-2"></i>Register
        </button>
      </form>

      <div class="text-center">
        <p class="text-muted mb-0">Already have an account?</p>
        <router-link to="/login" class="text-decoration-none text-success">
          Sign in instead
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'vue-router';

export default {
  name: 'Register',
  setup() {
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const registerUser = async () => {
      if (password.value !== confirmPassword.value) {
        errorMessage.value = 'Passwords do not match.';
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        router.push('/home');
      } catch (error) {
        errorMessage.value = error.message.includes('email-already-in-use') 
          ? 'Email already in use. Please login instead.' 
          : 'Registration failed. Please try again.';
      }
    };

    return {
      email,
      password,
      confirmPassword,
      errorMessage,
      registerUser,
    };
  },
};
</script>

<style scoped>
.register-page {
  margin: 0;
}

.register-card {
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

.alert {
  border-radius: 0.5rem;
}

@media (max-width: 576px) {
  .register-card {
    padding: 2rem !important;
  }
}
</style>