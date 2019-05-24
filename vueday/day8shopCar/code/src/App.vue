<template>
  <div id="app">
    <header>购物车</header>
    <router-view class="main"/>
    <footer>
      <router-link to="/huojia" tag="span">货架</router-link>
      <router-link to="/my" tag="span">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    $route: {
      handler: function(to, from) {
        console.log(to);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped lang="less">
#app {
  display: flex;
  flex-direction: column;
  header {
    height: 40px;
    background: pink;
  }
  footer {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    span {
      flex: 1;
    }
  }
}
.main {
  flex: 1;
  overflow-y: auto;
}
.router-link-active {
  background: red;
}
</style>
