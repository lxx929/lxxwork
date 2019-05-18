<template>
  <div id="app">
    <leftList :datas="datas" @tapfn="changefn"/>
    <rightList :datar="list"/>
  </div>
</template>

<script>
import leftList from "./components/leftlist";
import rightList from "./components/rightlist";
import axios from "axios";

export default {
  name: "App",
  components: {
    leftList,
    rightList
  },
  data() {
    return {
      datas: [],
      list: [],
      ind: 0
    };
  },
  created() {
    axios.get("/api/getData").then(({ data }) => {
      this.datas = data;
      this.list = this.datas[this.ind].cities.map(item => item.cities);
    });
  },
  methods: {
    changefn(ind) {
      this.ind = ind;
     console.log(this.ind);
     this.list = this.datas[this.ind].cities.map(item => item.cities);
   }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
