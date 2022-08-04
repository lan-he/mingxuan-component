import Mobile from '@/views/mobile/index.vue'
export default [
    {
        path: '/mobile',
        name: 'mobile',
        component: Mobile,
        redirect: '/mobile-menu',
        children: [
            {
                path: '/mobile-menu',
                name: 'menu',
                component: () => import('@/views/mobile/menu.vue'),
                meta: {
                    hideHeaderTop: true,
                },
            },
            {
                path: '/tree',
                name: 'tree',
                component: () => import('@/views/mobile/tree.vue'),
            },
            {
                path: '/tree-zsy',
                name: 'tree-zsy',
                component: () => import('@/views/mobile/tree-zsy.vue'),
            },
            {
                path: '/sku',
                name: 'sku',
                component: () => import('@/views/mobile/sku.vue'),
            },
            {
                path: '/calendar',
                name: 'calendar',
                component: () => import('@/views/mobile/calendar.vue'),
            },
            {
                path: '/calendar-multiple',
                name: 'calendar-multiple',
                component: () => import('@/views/mobile/calendar-multiple.vue'),
            },
            {
                path: '/swiper',
                name: 'swiper',
                component: () => import('@/views/mobile/swiper.vue'),
            },
            {
                path: '/key-board',
                name: 'key-board',
                component: () => import('@/views/mobile/key-board.vue'),
            },
        ],
    },
]
