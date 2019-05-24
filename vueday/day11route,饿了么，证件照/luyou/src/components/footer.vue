<template>
  <footer>
    <router-link v-for="(item,index) in list" :key="index" :to="item.path">{{item.fot}}</router-link>
  </footer>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      list: [
        {
          fot: "首页",
          path: "/"
        },
        {
          fot: "发现",
          path: "/discover"
        },
        {
          fot: "订单",
          path: "/order"
        },
        {
          fot: "我的",
          path: "/prefile"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
footer {
  width: 100%;
  height: 44px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
}

.router-link-exact-active {
  color: #0085ff;
  /* border-bottom: 2px solid #0085ff; */
}
</style>