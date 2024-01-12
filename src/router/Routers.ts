export const Routers = {
  Locale: '/:locale?',
  Dashboard: '',
  Quiz: 'quiz/:quizId',
  Result: 'result',
  Profile: 'profile',
  Login: 'login',
  CertificateId: (certificateId: string) => `/certificate/${certificateId}`,
  PageNotFound: '/:pathMatch(.*)*',
} as const;