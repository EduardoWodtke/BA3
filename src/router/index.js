import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/BA3HomeView.vue'
import search from '../views/BA3SearchView.vue'
import favoritos from '../views/BA3FavoritosView.vue'
import lancamentos from '../views/BA3LancamentosView.vue'
import futuros from '../views/BA3FuturosView.vue'
import populares from '../views/BA3PopularesView.vue'
import maisTarde from '../views/BA3MaisTardeView.vue'

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
      path: '/favoritos',
      name: 'favoritos',
      component: favoritos,
      props: true
    },
    {
      path: '/populares',
      name: 'populares',
      component: populares,
      props: true
    },
    {
      path: '/futuros',
      name: 'futuros',
      component: futuros,
      props: true
    },
    {
      path: '/lancamentos',
      name: 'lancamentos',
      component: lancamentos,
      props: true
    },
    {
      path: '/maisTarde',
      name: 'maisTarde',
      component: maisTarde,
      props: true
    },
  ]
})

export default router
