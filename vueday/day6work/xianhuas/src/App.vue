<template>
  <div id="app" listData>
    <!-- <img src="./assets/logo.png">
    <HelloWorld/>-->
    <div class="list">
      <ul>
        <li
          v-for="(item,index) in datalist"
          :key="index"
          @click="taptit(index)"
          :class="{'active':index===i}"
        >{{item.tit}}</li>
      </ul>
    </div>

    <section>
      <myitem :listData="lists"/>
    </section>
  </div>
</template>

<script>
import myitem from "./components/myitem";
import  {Datas}  from "./data/list.json";

export default {
  data() {
    return {
      lists: Datas.FlowerList,
      i: 0,
      datalist: [
        {
          tit: "综合"
        },
        {
          tit: "销量"
        },
        {
          tit: "价格"
        },
        {
          tit: "最新"
        }
      ]
    };
  },
  methods: {
    taptit(index) {
      this.i = index;
    }
  },
  components: {
    myitem,Datas
  },
  created() {
     console.log(this.lists);
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  background: lavenderblush;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.list {
  width: 100%;
  height: 60px;
}
section {
  width: 100%;
  flex:1;
  overflow-y: scroll;
}

ul {
  display: flex;
  justify-content: space-around;
  border-bottom: 10px solid rgb(226, 226, 226);
  background: lavenderblush;
}
li {
  line-height: 40px;
  cursor: pointer;
}
.active {
  color: lightcoral;
  border-bottom: 1px solid lightcoral;
}
[v-cloak]{
  display: none;
}
</style>
