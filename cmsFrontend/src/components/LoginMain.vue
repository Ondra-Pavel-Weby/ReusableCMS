<template>
  <main class="flex flex-col items-center gap-4">
    <div>
      <label for="uname">Username</label>
      <input type="text" placeholder="Enter Username" name="uname" required>
    </div>

    <div>
      <label for="psw">Password</label>
      <input id="passwordInput" :type="showPassword ? 'text' : 'password'" v-model="password"
        placeholder="Enter Password" name="psw" required>
      <button @click="togglePasswordVisibility" class="flex items-center gap-1">
        <Icon :icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'" class="w-5 h-5" />
        {{ showPassword ? 'Hide' : 'Show' }}
      </button>
    </div>

    <div class="flex gap-2">
      <input type="checkbox" v-model="rememberMe" name="remember" class="checkbox">
      <label for="remember">Remember me</label>
    </div>

    <button type="submit" class="btn btn-accent w-full">Login</button>
  </main>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { ref } from 'vue';

const rememberMe = ref(false)
const password = ref('')
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>
