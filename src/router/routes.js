const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/WhoAreWe.vue')
      },
      {
        path: 'OurTeam',
        component: () => import('pages/OurTeam.vue')
      },
      {
        path: 'LatestNews',
        component: () => import('src/pages/LatestNews.vue')
      },
      {
        path: 'Opencall',
        component: () => import('src/pages/OpenCall.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
