import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore('lang', () => {
  const isEn = ref(false)

  function toggleLang() {
    isEn.value = !isEn.value
  }

  return { isEn, toggleLang }
})

// unfinished
