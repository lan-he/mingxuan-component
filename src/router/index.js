import Vue from 'vue'
import VueRouter from 'vue-router'
import mobileRouter from '@/router/mobile-router.js'
import pcRouter from '@/router/pc-router.js'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/mobile',
    },
    ...mobileRouter,
    ...pcRouter,
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err)
}
export default router
