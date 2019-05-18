<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/>-->
    <header>
      <myheader :lists="lists"/>
    </header>
    
    <div class="section">
      <mycont 
      v-for="(item,index) in list"
      :key="index"
      :title="item.title"
      :content="item.content"
      :time="item.time"
      :type="item.type"
      :bool="item.bool"

      />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import myheader from './components/myheader';
import mycont from './components/mycont';
import datas from './mock';
export default {
  name: "App",
  components: {
    myheader,
    mycont
  },
  data(){
    return{ 
      list:[],
      lists:['未开始','已打卡','已放弃','全部']
    }
  },
  created() {
    console.log(datas);
    this.list=datas.list
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
}
header{
  width: 100%;
  height: 52px;
}
.section{
  flex:1;
  width: 100%;
  overflow-y: scroll;
}
</style>
