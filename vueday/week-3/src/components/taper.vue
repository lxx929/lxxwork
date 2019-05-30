<template>
  <div class="dlit" >
    <dl v-for="(ite,index) in item" :key="index"> 
      <dt>
        <img :src="ite.img" alt>
      </dt>
      <dd>
        <p class="pll">{{ite.title}}</p>
        <p>{{ite.time}}</p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["item"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    console.log(this.item);
  },
  mounted() {}
};
</script>
<style scoped lang="">
dl {
  width: 30%;
  /* display: flex; */
  padding: 10px 0;
}

dl dt {
  width: 100%;
  height: 160px;
  /* margin: 0 10px; */
}

dl dt img {
  width: 100%;
  height: 100%;
}

dl dd p {
  font-size: 13px;
  padding: 5px 0;
}

.pll {
  font-size: 16px;
  font-weight: 600;
}

.dlit{
    display: flex;
    justify-content: space-around;
}
</style>