<template>
  <div class="shop">
    <div class="head">
      <h4>shop店铺{{this.$route.params.id}}</h4>
      <ul class="title">
        <li @click="$router.push({name:'diancan'})">点餐</li>
        <li @click="$router.push({name:'common'})">评价</li>
        <li @click="$router.push({name:'shangjia'})">商家</li>
      </ul>
    </div>
    <keep-alive>
      <!-- 缓存组件状态 -->
      <!-- 出口路由 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.$route);
  },
  beforeEnter: (to, from, next) => {
    // 组件守卫,里面无this，因为此时组件未创件
    // console.log(to, from, next);
    if (to.params.id < 5) {
      next();
    } else {
      alert("找不到此店铺");
      next("/");
    }
  },
  // beforeRouteUpdate(to, from, next) {
  //   //组件路由路径改变时触发
  //   // console.log('beforeRouteUpdate');//组件复用触发
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   //组件路由跳转，离开时触发
  //   // console.log('beforeRouteLeave')
  //   next();
  // }
};
</script>
<style scoped lang="">
.head {
  height: 10%;
}
h4 {
  height: 40%;
  text-align: center;
}
ul {
  border-bottom: 1px solid rgb(224, 224, 224);
  height: 60%;
}
ul.title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 30px;
  background: lavenderblush;
}
</style>