// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../node_modules/element-ui/lib/theme-chalk/index.css'; //ui css
import ElementUI from 'element-ui' //element插件全局引入
Vue.use(ElementUI, { size: 'amall', zIndex: 3000 });

// import { Button, Select, Dialog } from 'element-ui';element插件按需加载
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.use(Dialog);

Vue.config.productionTip = false

import '../static/font/iconfont.css'; //fort


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})