import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import plugins from './plugins' //插件

import VueLazyload from 'vue-lazyload'

// console.log(plugins,'9999');
Vue.config.productionTip = false

Vue.use(plugins, {
    aa: '1701B'
}); //注册

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: require('./assets/timg.gif'),
    attempt: 1
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})