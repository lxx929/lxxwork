<template>
  <div class="item">
      <p>
        <img :src="options.img" alt>
      </p>
      <p>{{options.title}}</p>
      <div class="price">
        <span>{{options.price | fomatePrice}}</span>
        <btnVue :options="options"/>
    </div>
  </div>
</template>

<script>
import btnVue from './btnVue.vue';
export default {
  props: ["options"],
  components:{btnVue},

};
</script>

<style scoped lang="less">
.item{
  width: 50%;

  img{
    width: 100%;
    height: 160px;
  }
.price {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
}

</style>
