<script setup lang="ts">
import { ref } from 'vue';

const clientName: string = "Bowling Radava"

const rememberMe = ref(true)
const password = ref('')
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <header class="">
    <h1>{{ clientName }}</h1>
  </header>
  <main class="">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <div>
      <label for="psw"><b>Password</b></label>
      <input id="passwordInput" :type="showPassword ? 'text' : 'password'" v-model="password"
        placeholder="Enter Password" name="psw" required>
      <button @click="togglePasswordVisibility">
        {{ showPassword ? 'Hide' : 'Show' }}
      </button>
    </div>

    <input type="checkbox" v-model="rememberMe" name="remember"> Remember me
    <button type="submit">Login</button>
  </main>
  <footer class="">
    <a href="/">&copy; 2025 | Ondra & Pavel Weby</a>
  </footer>
</template>
