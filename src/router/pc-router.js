export default [
    {
        path: '/pc',
        name: 'pc',
        component: () => import('@/views/pc/index.vue'),
        redirect: '/pinkman-game',
        children: [
            {
                path: '/bilibili-header',
                name: 'bilibili-header',
                component: () => import('@/views/pc/deep-view.vue'),
            },
            {
                path: '/puzzle-tool',
                name: 'puzzle-tool',
                component: () => import('@/views/pc/puzzle-tool.vue'),
            },
            {
                path: '/pinkman-game',
                name: 'pinkman-game',
                component: () => import('@/views/pc/pinkman-game.vue'),
            },
            {
                path: '/not-found-purple',
                name: 'not-found-purple',
                component: () => import('@/views/pc/not-found-purple.vue'),
            },
            {
                path: '/not-found-snowy',
                name: 'not-found-snowy',
                component: () => import('@/views/pc/not-found-snowy.vue'),
            },
            {
                path: '/not-found-desert',
                name: 'not-found-desert',
                component: () => import('@/views/pc/not-found-desert.vue'),
            },
        ],
    },
]
