<template>
  <label class="flex items-center cursor-pointer gap-2">
    <img v-if="!themeStore.isDark" src="../assets/icons/sun.svg" alt="Sun icon" class="w-5 h-5" />
    <img v-else src="../assets/icons/sunWhite.svg" alt="Sun icon" class="w-5 h-5" />

    <input type="checkbox" :checked="themeStore.isDark" @change="themeStore.toggleTheme"
      class="toggle theme-controller" />

    <img v-if="!themeStore.isDark" src="../assets/icons/moon.svg" alt="Moon icon" class="w-5 h-5" />
    <img v-else src="../assets/icons/moonWhite.svg" alt="Moon icon" class="w-5 h-5" />
  </label>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/theme'
import { onMounted } from 'vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>
