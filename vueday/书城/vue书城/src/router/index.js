import Vue from 'vue'
import Router from 'vue-router'
import Bookcity from '@/views/bookcity'
import Bookself from '@/views/bookself'
import Search from '@/views/search'
import Detail from '@/views/detail'
import Read from '@/views/read'
import Login from '@/views/login'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/bookcity'
        },
        {
            path: '/bookcity',
            name: 'bookcity',
            component: Bookcity
        },
        {
            path: '/bookself',
            name: 'bookself',
            component: Bookself
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        },
        {
            path: '/read',
            name: 'read',
            component: Read,
            beforeEnter(to, from, next) {
                if (window.localStorage.getItem('userId')) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})