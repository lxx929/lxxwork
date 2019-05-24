import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.filter('fomatePrice', (val) => {
    return `￥${parseFloat(val).toFixed(2)}`
})
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})