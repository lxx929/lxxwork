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

    <!-- 出口路由 -->
    <router-view></router-view>
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
  }
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