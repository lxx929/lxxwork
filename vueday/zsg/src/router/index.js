import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('@/views/home')
const Answer = () =>
    import ('@/views/answer')
const Last = () =>
    import ('@/views/last')


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/answer',
        name: 'answer',
        component: Answer
    }, {
        path: '/last',
        name: 'last',
        component: Last
    }]
})