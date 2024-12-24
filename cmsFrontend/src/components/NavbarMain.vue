<template>
  <nav class="flex flex-col h-screen w-60 justify-between border-r border-gray-900">
    <div class="flex flex-col gap-6 p-4">
      <router-link to="/dashboard" class="text-2xl font-semibold hover:text-primary transition">{{ companyStore.name
        }}</router-link>
      <ul class="flex flex-col gap-4">
        <li v-for="link in navLinks" :key="link.path">
          <router-link :to="link.path" class="text-lg hover:text-primary transition"
            active-class="router-link-active">{{
              t(link.label)
            }}</router-link>
        </li>
      </ul>
    </div>
    <div class="flex flex-col items-center gap-8 border-t border-gray-900 pt-4">
      <div class="flex flex-col items-center gap-2">
        <ThemeSwap />
        <LangSwap />
      </div>
      <div class="w-full h-20 flex justify-center text-xl font-semibold">
        <router-link to="/" class="flex items-center gap-2 p-3 hover:text-primary transition">
          Logout
          <Icon icon='mdi-logout' class="w-6 h-6" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ThemeSwap from '@/components/ThemeSwap.vue';
import LangSwap from '@/components/LangSwap.vue';

import { Icon } from '@iconify/vue'

import { useCompanyStore } from '../stores/company'
const companyStore = useCompanyStore()

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const navLinks = ref([
  { path: '/dashboard/news', label: 'news' },
  { path: '/dashboard/pages', label: 'pages' },
])
</script>
