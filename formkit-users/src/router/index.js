import { createRouter, createWebHistory } from 'vue-router'

// Importación de guard
import { setTitlePage } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import('../views/MainContainer.vue'),
      meta:{ title:'Main Container' }
    },
  ]
})

setTitlePage( router )

export default router
