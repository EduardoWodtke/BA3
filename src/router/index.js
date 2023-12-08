import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/BA3HomeView.vue'
import search from '../views/BA3SearchView.vue'
import romance from '../views/BA3RomanceView.vue'
import comedia from '../views/BA3ComediaView.vue'
import acao from '../views/BA3AçãoView.vue'
import populares from '../views/BA3PopularesView.vue'
import login from '../views/BA3Loginview.vue'
import signin from '../views/BA3signinview.vue'

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
      path: '/romance',
      name: 'romance',
      component: romance,
      props: true
    },
    {
      path: '/populares',
      name: 'populares',
      component: populares,
      props: true
    },
    {
      path: '/acao',
      name: 'acao',
      component: acao,
      props: true
    },
    {
      path: '/comedia',
      name: 'comedia',
      component: comedia,
      props: true
    },
    {
      path: '/sign',
      name:'sign',
      component: signin
    },
    {
      path: '/login',
      name:'login',
      component: login
    },
  ]
})

export default router
