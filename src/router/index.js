import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/BA3HomeView.vue'
import search from '../views/BA3SearchView.vue'
import sign from '../views/BA3signinview.vue'
import login from '../views/BA3Loginview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/search',
      name: 'search',
      component: search,
      props: route => ( { query: route.query.q } )
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/info/:id',
      name:'info',
      component: () => import('../views/BA3InfoView.vue'),
      props: true
    },
    {
      path: '/sign',
      name:'sign',
      component: sign
    },
    {
      path: '/login',
      name:'login',
      component: login
    },
  ]
})

export default router
