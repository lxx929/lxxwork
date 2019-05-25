<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      datas: []
    };
  },
  created() {
    axios.get("/getData").then(({ data }) => {
      console.log(data);
      this.datas = data;
    });


  },
  methods: {}
};
</script>

<style>
[v-cloak]{
  display: none;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,
body,
#app,
.home,
.order,
.discover,
.prefile,
.shop {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app,
.home,
.order,
.discover,
.prefile {
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  line-height: 44px;
  height: 50px;
  color: lightcyan;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
section {
  padding: 5px 15px;
  width: 100%;
  flex: 1;
  background: lavenderblush;
}
</style>
