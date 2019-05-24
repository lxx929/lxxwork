<template>
  <div id="app">
     <header>
       <i class="icon iconfont icon-wode-xuanzhong"></i>
       <b>消息</b>
       <i class="icon iconfont icon-wode"></i>
     </header>
    <section>
      <input type="text" placeholder="请输入搜索内容" v-model="val">
      <myList :datas="datas"/>
    </section>
     <footer>
       <dl v-for="(item,index) in list" :key="index" @click="tapfun(index)" :class="{active:index===i}">
         <dt>
           <img src="../static/image/tou4.gif" alt="">
         </dt>
         <dd>{{item.tit}}</dd>
       </dl>
     </footer>
  </div>
</template>

<script>
import myList from './components/list';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    myList
  },
  data(){
    return{
      i:1,
      val:"张三",
      datas:[],
      list:[{tit:"首页"},{tit:"消息"},{tit:"人脉"},{tit:"我的"}]
    }
  },
  created() {
    axios.get('/getData').then(({data})=>{
      console.log(data),
      this.datas=data;

    })
  },
  methods: {
    tapfun(index){
      this.i=index;
    }
  },
}
</script>

<style>
input{
  color:#999;
  width: 94%;
  height: 30px;
  margin: 6px 3%;
  border-radius: 6px;
  outline: 0;
  border:1px solid #eee;
  text-align: center;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
}
section{
  width: 100%;
  flex:1;
  overflow-y: scroll;
  background: rgb(238, 237, 237);
}
header,footer{
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
footer{
  height: 60px;
}
footer dl{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.active{
  color: lightseagreen;
  font-weight: bold;
}
dt img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
