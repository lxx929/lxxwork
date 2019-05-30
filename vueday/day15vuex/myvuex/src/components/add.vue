<template>
  <div>
    add{{$store.state.num}}
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
      num: "累加"
    };
  },
  computed: {},
  methods: {
      tapfun(){
          this.$store.commit("add");
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