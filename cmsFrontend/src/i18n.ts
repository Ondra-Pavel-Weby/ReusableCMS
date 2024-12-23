import { createI18n } from 'vue-i18n'
import en from './lang/en/en.json'
import cz from './lang/cz/cz.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    cz,
  },
})

export default i18n
