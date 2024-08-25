import { createRouter, createWebHistory } from 'vue-router'

import TabsViews from '@/views/tabs/TabsViews.vue'

import MeView from '@/views/tabs/me/MeView.vue'

import OrderView from '@/views/tabs/order/OrderView.vue'
import HomeView from '@/views/tabs/home/HomeView.vue'
import LoginView from '@/views/login/LoginView.vue'
import ShopView from '@/views/shop/ShopView.vue'
import GoodsView from '@/views/goods/GoodsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsViews,
      redirect: '/home',
      children: [
        {
          name: 'home',
          path: '/home',
          component: HomeView,
        },
        {
          name: 'me',
          path: '/me',
          component: MeView,
        },
        {
          name: 'order',
          path: '/order',
          component: OrderView,
        },
      ],
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      name: 'goods',
      path: '/goods/:id',
      component: GoodsView,
    },
  ],
})

export default router
