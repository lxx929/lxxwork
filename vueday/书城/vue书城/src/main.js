// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myHeader from './components/my-header'
import Search from './components/search'
import myList from './components/my-list'
import 'swiper/dist/css/swiper.min.css'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.component('myHeader',myHeader)
Vue.component('Search',Search)
Vue.component('myList',myList)
Vue.use(VueLazyload,{
  preLoad:1.3,
  loading:'../static/timg.gif',
  attempt:1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
