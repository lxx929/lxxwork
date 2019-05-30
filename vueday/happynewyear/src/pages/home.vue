<template>
  <div class="home">
    <img class="img7" src="static/images/7.png" alt>
    <img class="img6" src="static/images/6.png" alt>
    <div @click="toHome" class="img8" >
      <img src="static/images/8.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toHome(){
      this.$router.push('/question/0')
      localStorage.removeItem('total')
    }
  }
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  position: relative;
  height: 100%;
  .img7 {
    width: 90%;
    height: 230px;
    position: absolute;
    left: -60px;
    bottom: 0px;
  }
  .img6 {
    width: 90%;
    height: 230px;
    position: absolute;
    // transform: rotate(-15deg);
    right: -100px;
    top: 8px;
  }
  .img8 {
    width: 100%;
    position: absolute;
    top: 50%;
    img {
      width: 40%;
      margin-left: 50%;
    }
  }
}
</style>
