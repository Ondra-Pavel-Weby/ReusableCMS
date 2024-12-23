import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore('lang', () => {
  const isEn = ref(localStorage.getItem('lang') === 'en')

  function toggleLang() {
    isEn.value = !isEn.value
    localStorage.setItem('lang', isEn.value ? 'en' : 'cz')
  }

  return { isEn, toggleLang }
})
