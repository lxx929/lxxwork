<template>
  <div class="header">
    <ul>
      <li
        v-for="(item,index) in lists"
        :key="index"
        @click="tapfun(index)"
        :class="{active:index===i}"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["lists"],
  data() {
    return {
      i: 0
    };
  },
  methods: {
    tapfun(index) {
      this.i = index;
      console.log(this.i);
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  border-bottom: 10px solid rgb(238, 238, 238);
  background: lemonchiffon;
}
li{
    flex:1;
    text-align: center;
}
.active {
  color: lightcoral;
  border-bottom: 2px solid lightcoral;
}
</style>
