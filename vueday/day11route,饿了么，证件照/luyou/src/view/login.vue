<template>
  <div>
    请登录
    <button @click="loginfn">登录</button>
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
      window.localStorage.setItem("userId", "123");
      let userId=  window.localStorage.getItem("userId");

      console.log(userId,"login");
      this.$router.push({path:'/'})
    
    }
  },
  created() {
  
  },
  mounted() {},

};
</script>
<style scoped lang="">
</style>