import { createRouter, createWebHistory } from 'vue-router'
import QuizView from "@/views/QuizView/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quiz',
      component: QuizView,
    },
  ]
})

export default router
