<template>
  <div class="w-full h-screen py-3 flex flex-col justify-between items-center gap-10">
    <header class="w-full px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div>
        <h1 class="text-2xl">{{ companyStore.name }}</h1>
      </div>
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <ThemeSwap />
        <hr class="h-8 w-[2px] border-none bg-current hidden sm:block">
        <LangSwap />
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
import LangSwap from "../components/LangSwap.vue";
import { useCompanyStore } from '../stores/company'

const companyStore = useCompanyStore()
</script>
