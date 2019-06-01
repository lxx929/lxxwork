<template>
  <div>
    <ul>
      <li @click="$router.push({name:'shi'})">个人事项</li>
      <li @click="$router.push({name:'tip'})">提醒事项</li>
    </ul>

        <keep-alive>
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
  mounted() {}
};
</script>
<style scoped lang="">
ul{
    display: flex;
    line-height: 50px;
}
li{
    margin: 10px 20px;
}
</style>