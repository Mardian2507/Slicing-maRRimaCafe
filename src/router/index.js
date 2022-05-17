import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produk',
    name: 'produk',
    component: () => import('../views/ProdukView.vue')
  },
  {
    path: '/promo',
    name: 'promo',
    component: () => import('../views/PromoView.vue')
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component: () => import('../views/KeranjangView.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('../components/NavbarComp.vue')
  },
  {
    path: '/footer',
    name: 'footer',
    component: () => import('../components/FooterComp.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
