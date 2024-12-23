import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useThemeStore } from './stores/theme'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const themeStore = useThemeStore()
themeStore.initTheme()

app.mount('#app')
