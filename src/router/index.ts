import { createRouter, createWebHistory, RouterView } from 'vue-router';
import { Routers } from '@/router/Routers';
import { useQuizScore } from '@/stores/score';
import DashboardView from '@/views/DashboardView/DashboardView.vue';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { Trans } from '@/i18n/translation';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routers.Locale,
      component: RouterView,
      beforeEnter: (to, from, next) => {
        const trans = new Trans();

        trans.routeMiddleware(to, from, next);
      },
      children: [
        {
          path: Routers.Dashboard,
          name: 'dashboard',
          component: DashboardView,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: Routers.Quiz,
          name: 'quiz',
          component: () => import('@/views/QuizView/QuizView.vue'),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: Routers.Result,
          name: 'result',
          component: () => import('@/views/ResultView/ResultView.vue'),
          meta: {
            requiresAuth: true,
          },

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
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: Routers.Login,
          name: 'login',
          component: () => import('@/views/LoginView/LoginView.vue'),
          meta: {
            requiresAuth: false,
          },
        },
        {
          path: Routers.CertificateId(':certificateId'),
          name: 'certificate',
          component: () => import('@/views/CertificateView/CertificateView.vue'),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const  authStore  = useAuthStore();
  const isAuthenticated = storeToRefs(authStore).isAuthenticated.value;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
