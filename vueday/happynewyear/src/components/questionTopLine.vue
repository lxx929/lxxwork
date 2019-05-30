<template>
  <div>
    <p v-for="item in options" :key="item.id" :class="{on:item.isRouteActive}">
      <span>{{item.type}}</span>
      <span v-if="item.flag===false">×</span>
      <span v-if="item.flag===true">√</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["options"]
  // watch: {
  //     $route: {
  //       handler: function(newval, oldval) {
  //         console.log(newval)
  //       },
  //       deep: true,
  //       immediate: true
  //     }
  //   },
};
</script>

<style lang="less" scoped>
.on {
  background: yellow;
}
</style>
