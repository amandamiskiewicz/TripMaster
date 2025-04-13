<template>
  <div class="register">
    <router-link to="/" class="btn btn-outline-secondary mb-3">Back</router-link>
    <h2>Create an Account</h2>

    <form @submit.prevent="registerUser">
      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>

      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>

      <div class="input-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" v-model="confirmPassword" id="confirmPassword" required />
      </div>

      <button type="submit">Register</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <button class="cancel" @click="cancelRegistration">Cancel</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'vue-router';

export default {
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
        router.push('/login');
      } catch (error) {
        errorMessage.value = error.message;
      }
    };

    const cancelRegistration = () => {
      router.push('/'); 
    };

    return {
      email,
      password,
      confirmPassword, 
      errorMessage,
      registerUser,
      cancelRegistration,
    };
  },
};
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
}

h2 {
  font-size: 2rem;
  color: #42b883;
  margin-bottom: 20px;
}

.error {
  color: red;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  font-size: 1rem;
  color: #555;
}

input {
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 5px rgba(66, 184, 131, 0.5);
}

button {
  padding: 12px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #358d73;
}

.cancel {
  padding: 12px 20px;
  background-color: #1e88e5; 
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.cancel:hover {
  background-color: #4e86cc; 
}
</style>
