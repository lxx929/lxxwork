import Vue from 'vue';
import App from './App';
import router from './router'; //路由
import '../node_modules/better-scroll/dist/bscroll.esm'

// import myFooter from './components/footer'; //全局footer组件
// Vue.component('myFooter', myFooter);

import Plugin from './plugin/index';
Vue.use(Plugin, {
    val: "我是自定义组件（开发组件）"
})

Vue.config.productionTip = false;

/* eslint-disable no-new */


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})