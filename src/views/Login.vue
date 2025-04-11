<template>
  <div class="login-page">
    <h1>Welcome to Trip Master!</h1>

    <div class="error" v-if="errorMessage">{{ errorMessage }}</div>

    <form @submit.prevent="loginWithEmail">
      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>

    <div class="action-buttons">
      <button class="google-login" @click="loginWithGoogle">Login with Google</button>
      <button class="cancel" @click="cancelLogin">Cancel</button>
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
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('User logged in:', userCredential.user);
        router.push('/home');
      } catch (error) {
        errorMessage.value = 'Login failed: ' + error.message;
        console.error('Error during login', error);
      }
    };

    const loginWithGoogle = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log('User logged in with Google:', result.user);
        router.push('/home');
      } catch (error) {
        errorMessage.value = 'Google login failed: ' + error.message;
        console.error('Error during Google login', error);
      }
    };

    const cancelLogin = () => {
      router.push('/'); 
    };

    return {
      email,
      password,
      loginWithEmail,
      loginWithGoogle,
      errorMessage,
      cancelLogin,
    };
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
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

.google-login {
  padding: 12px 20px;
  background-color: #4285f4; 
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.google-login:hover {
  background-color: #4e86cc;
}

.cancel {
  padding: 12px 20px;
  background-color: #1e88e5; 
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cancel:hover {
  background-color: #1976d2;
}

.action-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
