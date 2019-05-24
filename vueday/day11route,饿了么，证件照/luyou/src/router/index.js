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

Vue.use(vueRouter);

export default new vueRouter({
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
        }, {
            path: '/shop/:id', //动态路由
            name: 'shop',
            component: Shop,
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
            component: Discover
        }, {
            path: '/order',
            name: 'order',
            component: Order
        }, {
            path: '/prefile',
            name: 'prefile',
            component: Prefile
        }, {
            path: '/search',
            name: 'search',
            component: Search
        }, {
            path: '*',
            name: '404',
            component: Notfind
        }
    ]
})