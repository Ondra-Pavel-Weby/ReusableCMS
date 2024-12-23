import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCompanyStore = defineStore('company', () => {
  const name = ref('Bowling Radava')

  return { name }
})
