import Vue from 'vue';
import vueRouter from 'vue-router';

import Home from '@/view/home.vue';
import Discover from '@/view/discover.vue';
import Order from '@/view/order.vue';
import Prefile from '@/view/prefile.vue';
import Notfind from '@/view/404.vue';
import Search from '@/view/search.vue';
import Shop from '@/view/shop.vue';

import Diancan from '@/view/diancan.vue';
import Common from '@/view/common.vue';
import Shangjia from '@/view/shangjia.vue';

import Login from '@/view/login.vue';


Vue.use(vueRouter);

const router = new vueRouter({
    mode: 'history',
    // mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop,
            beforeEnter: (to, from, next) => {
                // 路由独享守卫
                console.log('路由独享守卫,我只有一个，是独生子');
                next();
            }
        }, {
            path: '/shop', //动态路由
            name: 'shop',
            component: Shop,
            // redirect: '/shop/:id/diancan',
            redirect: { name: 'diancan' }, //重定向，默认显示
            children: [{ //二级子路由都不加 '/'
                path: 'diancan',
                name: 'diancan',
                component: Diancan
            }, {
                path: 'common',
                name: 'common',
                component: Common
            }, {
                path: 'shangjia',
                name: 'shangjia',
                component: Shangjia
            }]
        }, {
            path: '/discover',
            name: 'discover',
            meta: { required: true },
            component: Discover
        }, {
            path: '/order',
            name: 'order',
            meta: { required: true, title: "我是order标题" }, //元信息拦截
            component: Order
        }, {
            path: '/prefile',
            name: 'prefile',
            meta: { required: true, false: "我是prefile标题" }, //元信息拦截
            component: Prefile
        }, {
            path: '/search',
            name: 'search',
            component: Search
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '*',
            name: '404',
            component: Notfind
        }
    ]
})

// const login = ["order", 'prefile', "common"];
// router.beforeEach((to, from, next) => { //普通路由拦截校验
//     if (login.includes(to.name)) {
//         let userId = window.localStorage.getItem('userId');
//         console.log(userId);
//         if (userId) {
//             next();
//         } else {
//             next('/login');
//         }
//     } else {
//         next();
//     }
// })

router.beforeEach((to, from, next) => { //meta路由元信息
    if (to.matched.some(item => item.meta.required)) {
        let userId = window.localStorage.getItem('userId');
        console.log(userId, "跳");
        if (userId) { //登录后
            next();
        } else { //没登录，跳转登录
            next('/login');
        }
    } else {
        next();
    }
});

router.afterEach((to, form) => {
    if (to.meta && to.title) {
        document.title = to.meta.title;
    } else {
        document.title = '我是被后置守位改变的标题';
    }
})

export default router;