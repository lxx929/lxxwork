import Vue from "vue";
import vueRouter from 'vue-router';

import myDiscover from '@/pages/discover';
import mySearch from '@/pages/search';
import myContacts from '@/pages/contacts'; //联系人
import myMore from '@/pages/more';
import myAdd from '@/pages/add'; //添加
import myPublished from '@/pages/published'; //发表
import myCircle from '@/pages/circle'; //圈子

import myHome from '@/pages/home';
import My from '@/pages/my';

import myLogin from '@/pages/login.vue';
import notFind from '@/pages/404.vue';

Vue.use();

const router = new vueRouter({
    mode: 'hash',
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: myHome
    }, {
        path: '/discover',
        name: 'discover',
        component: myDiscover
    }, {
        path: '/my',
        name: 'my',
        component: My
    }, {
        path: '/discover',
        name: 'discover',
        redirect: { name: 'published' },
        component: myDiscover,
        children: [{
            path: '/published', //发表
            name: 'published',
            component: myPublished
        }, {
            path: '/contacts', //联系人
            name: 'contacts',
            component: myContacts
        }, {
            path: '/more',
            name: 'more',
            redirect: { name: 'add' },
            component: myMore,
            children: [{
                path: '/add',
                name: 'add',
                component: myAdd
            }, {
                path: '/circle', //圈子
                name: 'circle',
                component: myCircle
            }]
        }]
    }, {
        path: '/search',
        name: 'search',
        component: mySearch
    }, {
        path: '/login',
        name: 'login',
        component: myLogin
    }, {
        path: '/404',
        name: '404',
        component: notFind
    }]
});

const login = ["contacts", 'published', 'circle', 'my'];
router.beforeEach((to, from, next) => { //普通路由拦截校验
    if (login.includes(to.name)) {
        let userId = window.localStorage.getItem('userId');
        console.log(userId);
        if (userId) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
})

export default router;