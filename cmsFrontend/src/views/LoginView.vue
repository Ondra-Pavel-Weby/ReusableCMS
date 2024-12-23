<template>
  <div class="w-full h-screen py-6 flex flex-col justify-between items-center">
    <header class="w-full px-6 flex justify-between">
      <div>
        <h1>{{ clientName }}</h1>
      </div>
      <div>
        <ThemeSwap />
      </div>
    </header>
    <LoginMain />
    <footer class="">
      <a href="/">&copy; 2025 | Ondra & Pavel Weby</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import LoginMain from "../components/LoginMain.vue";
import ThemeSwap from "../components/ThemeSwap.vue";

const clientName: string = "Bowling Radava"
</script>
