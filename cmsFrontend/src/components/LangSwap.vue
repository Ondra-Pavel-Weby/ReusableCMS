<template>
  <label class="flex items-center cursor-pointer gap-2">
    <img src="../assets/icons/cz.svg" alt="Czech flag" class="w-6 h-6" />

    <input type="checkbox" :checked="langStore.isEn" @change="toggleLanguage" class="toggle theme-controller" />

    <img src="../assets/icons/gb.svg" alt="Great Britain flag" class="w-6 h-6" />
  </label>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'
import { useLangStore } from '../stores/language'

const { locale } = useI18n()
const langStore = useLangStore()

const setLanguage = (newLang: string) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

const toggleLanguage = () => {
  const newLang = langStore.isEn ? 'cz' : 'en'
  langStore.toggleLang()
  setLanguage(newLang)
}

watchEffect(() => {
  const storedLang = localStorage.getItem('lang')
  if (storedLang) {
    locale.value = storedLang
    langStore.isEn = storedLang === 'en'
  }
})
</script>
