<template>
  <div>
    login
    <button @click="loginfun">登录</button>
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
    loginfun() {
      console.log("登录");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>