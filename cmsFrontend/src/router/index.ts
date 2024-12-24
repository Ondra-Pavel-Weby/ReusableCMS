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
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/dashboard/news',
      name: 'news',
      component: () => import('../views/Dashboard/NewsView.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/dashboard/pages',
      name: 'pages',
      component: () => import('../views/Dashboard/PagesView.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: '404 - Not Found',
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
