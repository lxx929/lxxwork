import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home';
import Login from '@/view/login';
import Not from '@/view/404';
import Information from '@/view/information';
import mySet from '@/view/myset';
import myTip from '@/view/mytip';
import Product from '@/view/product';
import Shi from '@/view/shi';
import Tip from '@/view/tip';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        redirect: { name: 'myset' },
        component: Home,
        children: [{
            path: 'myset',
            name: 'myset',
            redirect: { name: 'mytip' },
            component: mySet,
            children: [{
                path: 'mytip',
                name: 'mytip',
                redirect: { name: 'shi' },
                component: myTip,
                children: [{
                    path: 'shi',
                    name: 'shi',
                    component: Shi
                }, {
                    path: 'tip',
                    name: 'tip',
                    component: Tip
                }]
            }, {
                path: 'product',
                name: 'product',
                component: Product
            }]
        }, {
            path: 'information',
            name: 'information',
            component: Information
        }]
    }, {
        path: '*',
        name: '404',
        component: Not
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }]
})





// router.beforeEach((to, form, next) => {
//     next('/')
// })

export default router;