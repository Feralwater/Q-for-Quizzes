import { createRouter, createWebHistory } from 'vue-router'
import QuizView from "@/views/QuizView/QuizView.vue";
import { Routers } from '@/router/Routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routers.Home,
      name: 'quiz',
      component: QuizView,
    },
    {
      path: Routers.Result,
      name: 'result',
      component: () => import('@/views/ResultView/ResultView.vue'),
    }
  ]
})

export default router
