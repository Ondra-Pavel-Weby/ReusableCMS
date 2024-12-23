<template>
  <label class="flex items-center cursor-pointer gap-2">
    <img src="../assets/icons/cz.svg" alt="Czech flag" class="w-6 h-6" />

    <input type="checkbox" :checked="langStore.isEn" @change="langStore.toggleLang" class="toggle theme-controller" />

    <img src="../assets/icons/gb.svg" alt="Great Britain flag" class="w-6 h-6" />
  </label>
</template>

<script setup lang="ts">
import { useLangStore } from '../stores/language'

const langStore = useLangStore()
</script>
