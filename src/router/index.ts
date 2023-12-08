import { createRouter, createWebHistory } from 'vue-router'
import QuizView from "@/views/QuizView/QuizView.vue";
import { Routers } from '@/router/Routers'
import { useQuizScore } from '@/stores/score'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routers.Quiz,
      name: 'quiz',
      component: QuizView,
    },
    {
      path: Routers.Result,
      name: 'result',
      component: () => import('@/views/ResultView/ResultView.vue'),

      beforeEnter: (to, from, next) => {
        const { isQuizCompleted } = useQuizScore();

        if (isQuizCompleted) {
          next();
        } else {
          next({ name: '404' });
        }
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: '404',
      component: () => import('@/views/404View/404View.vue'),
    }
  ]
})

export default router
