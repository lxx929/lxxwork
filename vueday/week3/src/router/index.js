import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({//按需加载
  routes: [
    {
      path: '/',
      name: 'maoyan',
      component: ()=>import("@/components/dianyin")
    },
    {
      path: '/',
      name: 'my',
      component: ()=>import("@/components/my")
    },{
      path: '/',
      name: 'yinyuan',
      component: ()=>import("@/components/yinyuan")
    },{
      path: '/',
      name: 'xiang',
      component: ()=>import("@/components/xiang")
    }
  ]
})
