<template>
  <div class="flex">
    <header>
      <NavbarMain />
    </header>
    <main>
      <h1 class="text-primary">{{ t('pages') }}</h1>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavbarMain from '@/components/NavbarMain.vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
