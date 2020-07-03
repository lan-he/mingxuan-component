export default {
  mode: 'history', // hash/history
  routes: [
    { path: '/', redirect: '/menu' },
    {
      path: '/menu',
      name: 'menu',
      component: (resolve) => require(['@/page/menu'], resolve),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: (resolve) => require(['@/components/calendar'], resolve),
    },
    {
      path: '/mulcalendar',
      name: 'mulcalendar',
      component: (resolve) =>
        require(['@/components/calendar-multiple'], resolve),
    },
    {
      path: '/tree',
      name: 'tree',
      component: (resolve) => require(['@/components/tree'], resolve),
    },
  ],
}
