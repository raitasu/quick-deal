import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/quick-deal',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quick-deal/task-manager',
      name: 'task-manager',
      component: () => import('../views/TaskManagerView.vue')
    }
  ]
})

export default router
