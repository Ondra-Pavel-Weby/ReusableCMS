import { createRouter, createWebHistory } from 'vue-router'

import { useCompanyStore } from '../stores/company'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const companyStore = useCompanyStore()
  document.title = `${to.meta.title} | ${companyStore.name}`
  next()
})

export default router
