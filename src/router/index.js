export default {
  mode: 'history', //hash/history
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'calendar',
      component: (resolve) => require(['@/components/Calendar'], resolve),
    },{
      path: '/demo',
      name: 'demo',
      component: (resolve) => require(['@/components/demo'], resolve),
    }
  ],
}
