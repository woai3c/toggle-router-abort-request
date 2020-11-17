import Vue from 'vue'
import VueRouter from 'vue-router'
import { pendingRequest } from '@/utils/request'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
    },
    {
        path: '/a',
        name: 'a',
        component: () => import('@/views/a.vue')
    },
    {
        path: '/b',
        name: 'b',
        component: () => import('@/views/b.vue')
    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    pendingRequest.forEach(item => {
        item.routeChangeCancel && item.cancel();
    })

    next()
})

export default router
