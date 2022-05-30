export default [
    {
        path: '/pc',
        name: 'pc',
        component: () => import('@/views/pc/index.vue'),
        redirect: '/bilibili-header',
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
        ],
    },
]
