<template>
  <div id="app">
    <div class="top">
      <img src="static/images/2.png" alt>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="top">
      <img src="static/images/1.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped lang="less">
#app {
  display: flex;
  flex-direction: column;
  background: #cd141c;
  .top {
    width: 100%;
    height: 60px;
    img {
      width: 100%;
    }
  }
  .content {
    flex: 1;
    overflow-y: hidden;
    position: relative;
  }
}
</style>
