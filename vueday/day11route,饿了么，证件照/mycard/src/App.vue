<template>
  <div id="app">
      <header>
          <div class="top">
              <h2>智能证件照</h2>
              <input type="text" placeholder="搜索规格名称、尺寸">
          </div>
          <div class="menu">
              <dl v-for="(item,index) in menu" :key="index">
                <dt>假装这是图标</dt>
                <dd>{{item.tit}}</dd>
              </dl>
          </div>
      </header>
      <section>
         <div class="cont">
            <myList v-for="(item,index) in list" :key="index" :txt="item.txt" :cont="item.cont"/>
         </div>
      </section>
      <footer>
          <dl v-for="(item,index) in menu" :key="index">
            <dd>{{item.tit}}</dd>
          </dl>
      </footer>
  </div>
</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import myList from './components/lists';

export default {
  name: 'App',
  components: {
    myList
  },
  data(){
    return{
      menu:[],
      list:[]
    }
  },
  created() {
  

    axios.get('/getmenu').then(({data})=>{
      console.log(data);
      this.menu=data;
      
    });

    axios.get('/getlist').then(({data})=>{
      console.log(data);
      this.list=data;
      this.$nextTick(()=>{
        this.init();
      })
    });
  },
  methods: {
    init(){
        new BScroll('section',{
        click:true
      })
    }
  },
}
</script>

<style>
.cont{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.menu{
  display: flex;
  justify-content: space-between;
  text-align: center;
}
dt{
  background: lightcoral;
  margin: 10px;
  padding: 5px;
}
.top{
  display: flex;
  margin: 10px;
}
input{
  flex:1;
  margin: 0 20px;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,body,#app {
 width: 100%;
 height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
  
}
header{
  width: 100%;
  height: 160px;
  background: rgb(33, 114, 190);
  color:#fff;
  padding:0 15px;
}
section{
  width: 100%;
  flex:1;
  overflow: hidden;
}
footer{
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: lightblue;
}

</style>
