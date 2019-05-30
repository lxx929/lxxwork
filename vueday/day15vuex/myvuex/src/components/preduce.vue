<template>
  <div>
    preduce {{$store.state.num}}
    <hr />
    <button @click="tapfun()">{{num}}</button>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      num: "递减"
    };
  },
  computed: {},
  methods: {
      tapfun(){
          this.$store.commit("preduce");
      }
  },
  created() {
    
  },
  mounted() {}
};
</script>
<style scoped lang="">
div{
    font-size: 20px;
}
</style>