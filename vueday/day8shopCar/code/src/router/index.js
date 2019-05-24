import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const huojia = () =>
    import ('@/pages/huojia.vue')
const my = () =>
    import ('@/pages/my.vue')
const router = new Router({
    routes: [{
            path: '/',
            redirect: '/huojia'
        },
        {
            path: '/huojia',
            component: huojia
        },
        {
            path: '/my',
            name: 'my',
            component: my,
            meta: { ischeck: true }
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.ischeck) {
        console.log('需要校验，是否已登录')
        if (localStorage.token) { //如果有token
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }

})
export default router