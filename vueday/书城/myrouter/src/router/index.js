import Vue from 'vue'
import Router from 'vue-router'
// import Bookcity from '@/views/bookcity'  //静态加载
// import Bookshelf from '@/views/bookshelf'
// import Search from '@/views/search'

const Bookcity = () =>
    import ('@/views/bookcity') //按需加载
const Bookshelf = () =>
    import ('@/views/bookshelf') //按需加载
const Search = () =>
    import ('@/views/search') //按需加载
const Detail = () =>
    import ('@/views/detail') //按需加载
const Ready = () =>
    import ('@/views/ready') //按需加载
const Login = () =>
    import ('@/views/login') //按需加载


Vue.use(Router);

const routes = [{
        path: '/',
        redirect: '/bookcity'
    },
    {
        path: '/bookcity',
        name: 'bookcity',
        component: Bookcity
    },
    {
        path: '/bookshelf',
        name: 'bookshelf',
        component: Bookshelf
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
        path: '/ready',
        name: 'ready',
        component: Ready,
        beforeEnter: (to, from, next) => {
            // ...
            if (window.localStorage.getItem('userId')) {
                next()
            } else {
                next('/login');
            }
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

export default new Router({
    routes
});