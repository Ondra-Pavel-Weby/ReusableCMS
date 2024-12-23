<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">404 - Page Not Found</h1>
    <p class="mt-4">The page you are looking for does not exist.</p>
    <router-link :to="redirectPath" class="mt-6 btn btn-accent">Go Back</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isAuthenticated = ref(true)

const redirectPath = isAuthenticated.value ? '/dashboard' : '/'
</script>
