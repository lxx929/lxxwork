import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Older from '../viwes/older'
import Dining from '../viwes/dining'
import Yinteng from '../viwes/yinteng'
import Shaning from '../viwes/shaning'
import Puted from '../viwes/puted'
import Login from '../viwes/login'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            redirect: { name: 'dining' }
        },
        {
            path: '/dining',
            name: 'dining',
            component: Dining,
            redirect: { name: 'shaning' },
            children: [{
                    path: 'shaning',
                    name: 'shaning',
                    component: Shaning
                },
                {
                    path: 'puted',
                    name: 'puted',
                    component: Puted
                }
            ]
        },
        {
            path: '/yinteng',
            name: 'yinteng',
            component: Yinteng
        },
        {
            path: '/older',
            name: 'older',
            component: Older,
            meta: { redire: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }

    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.redire)) {
        if (window.localStorage.getItem('use')) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router