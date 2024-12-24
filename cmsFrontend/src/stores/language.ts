import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore('lang', () => {
  const storedLang = localStorage.getItem('lang')
  const isEn = ref(localStorage.getItem('lang') === 'en')

  function toggleLang() {
    isEn.value = !isEn.value
    localStorage.setItem('lang', isEn.value ? 'en' : 'cz')
  }

  function initLang() {
    if (!storedLang) {
      localStorage.setItem('lang', 'cz')
    }
  }

  return { isEn, toggleLang, initLang }
})
