export const Routers = {
  Dashboard: '/',
  Quiz: '/quiz/:quizId',
  Result: '/result',
  Profile: '/profile',
  Login: '/login',
  PageNotFound: '/:pathMatch(.*)*',
} as const;