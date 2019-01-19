import Vue from 'vue'
import Router from 'vue-router'

let routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/view/index/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/login.vue')
    },
    {
        path: '/success',
        name: 'success',
        component: () => import('@/view/success/success.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/view/about/about.vue')
    },
    {
        path: '/article/:id',
        name: 'article',
        component: () => import('@/view/article/article.vue')
    },
    {
        path: '/scheme',
        name: 'scheme',
        component: () => import('@/view/scheme/scheme.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/view/contact/contact.vue')
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('@/view/product/product.vue')
    }
]

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/'
    : '/'

Vue.use(Router)
const router = new Router({
    routes,
    mode: 'hash',
    base: BASE_URL
})
export default router










