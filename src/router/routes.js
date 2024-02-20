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
        name: 'OrTeam',
        component: () => import('pages/OurTeam.vue')
      },
      {
        path: 'LatestNews',
        component: () => import('src/pages/LatestNews.vue')
      },
      {
        path: 'Opencall',
        component: () => import('src/pages/OpenCall.vue')
      },
      {
        path: 'Toolbox',
        component: () => import('src/pages/ToolboxPage.vue')
      },
      {

        path: 'Projects/InternationalProjects',
        name: 'InternationalProjects',
        component: () => import('src/pages/Projects/InternationalProjects.vue')

      },
      {
        path: 'Projects/:projectCategory/:name',
        component: () => import('src/pages/Projects/ProjectPage.vue'),
        props: true
      },
      {

        path: 'Projects/ForUkraine',
        name: 'ForUkraine',
        component: () => import('src/pages/Projects/ForUkraine.vue')
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
