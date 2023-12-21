import { createRouter, createWebHistory } from 'vue-router';
import QuizView from "@/views/QuizView/QuizView.vue";
import { Routers } from '@/router/Routers';
import { useQuizScore } from '@/stores/score';
import DashboardView from '@/views/DashboardView/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routers.Dashboard,
      name: 'dashboard',
      component: DashboardView,
    },
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
          next({ name: 'NotFound' });
        }
      },
    },
    {
      path: Routers.Profile,
      name: 'profile',
      component: () => import('@/views/ProfileView/ProfileView.vue'),
    },
    {
      path: Routers.Login,
      name: 'login',
      component: () => import('@/views/LoginView/LoginView.vue'),
    },
    {
      path: Routers.PageNotFound,
      name: 'NotFound',
      component: () => import('@/views/NotFoundView/NotFoundView.vue'),
    },
  ],
});

export default router;
