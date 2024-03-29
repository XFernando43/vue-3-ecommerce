import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component:()=> import('../views/HomeView.vue')
    },
    {
      path: '/Cart',
      name: 'Cart',
      component:()=> import ('../views/CartView.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
