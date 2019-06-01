<template>
  <div class="login">
    请您验证登录信息：
    <button @click="loginfn()">登录</button>
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
  methods: {
    loginfn() {
      console.log("login");
       let ls=window.localStorage;
       ls.setItem('user','刘苗苗');
      //  this.$router.push({path:'/'});
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>