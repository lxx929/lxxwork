<template>
  <div id="app">
    <header>
      <h2>{{title}}</h2>
    </header>

    <section>
      <div class="menu">
        <mymenu v-for="(item,index) in datas" :key="index" :title="item.title"/>
      </div>
      <div class="cont">
        <mylist />
      </div>
    </section>

    <div class="mark">
      <span>共计：{{}} 件</span>
      <span>总价：￥ {{}}</span>
      <button>加入购物车</button>
    </div>
  </div>
</template>

<script>
import mylist from "./components/mylist";
import mymenu from "./components/mymenu";
// import dataJson from './mock';
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      title: "购物车",
      datas: []
      // dataJson:dataJson.list
    };
  },
  components: {
    mylist,
    mymenu
  },
  created() {
    // console.log(dataJson);
    axios.get("/api/getData").then(({ data }) => {
      console.log(this.datas);
      this.datas = data;
    });
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: lightcoral;
}
h2 {
  width: 100%;
  text-align: center;
}
section {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  display: flex;
}
.menu{
  overflow-y: scroll;
  width: 100px;
  line-height: 40px;
  background: lavenderblush;
}
.cont{
  overflow-y: scroll;
  flex:1;
  background: lawngreen;
  padding:10px;
}
.mark {
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  bottom: 10px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
}

.mark button {
  height: 50%;
}
.mark span {
  margin: 0 10px;
}
</style>
