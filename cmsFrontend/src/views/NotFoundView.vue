<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ t('404') }}</h1>
        <p class="py-6">
          {{ t('404-text') }}</p>
        <router-link :to="redirectPath" class="mt-2 btn btn-wide text-base btn-accent">{{ t('back') }}</router-link>
        <div class="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
          <ThemeSwap />
          <hr class="h-8 w-[2px] border-none bg-current hidden sm:block">
          <LangSwap />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ThemeSwap from "../components/ThemeSwap.vue";
import LangSwap from "../components/LangSwap.vue";

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const isAuthenticated = ref(true)
const redirectPath = isAuthenticated.value ? '/dashboard' : '/'
</script>
