import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/BA3HomeView.vue'
import search from '../views/BA3SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
  ]
})

export default router
