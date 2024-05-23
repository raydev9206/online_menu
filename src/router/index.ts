import { createRouter, createWebHistory } from 'vue-router'
import main from '@/views/buenissimo/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buenissimo',
      component: main
    }
  ]
})

export default router
