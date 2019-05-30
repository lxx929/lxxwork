import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
    //异步引入
const Home = () =>
    import ('@/pages/home')
const Question = () =>
    import ('@/pages/question')
const page404 = () =>
    import ('@/pages/404')
const end = () =>
    import ('@/pages/end')
export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/question/:index',
            name: 'Question',
            component: Question
        },
        {
            path: '/end',
            name: 'end',
            component: end
        },
        {
            path: '*',
            name: 'page404',
            component: page404
        }
    ]
})