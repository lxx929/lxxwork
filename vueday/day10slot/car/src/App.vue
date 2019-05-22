<template>
  <div id="app">
    <header>
      <myHeader />
    </header>
    <section>
      <div class="box">
        <!-- <ul>
          <li>1
            <ul>
              <li>11
                <ul>
                  <li>111</li>
                  <li>222</li>
                </ul>
              </li>
              <li>22</li>
              <li>33</li>
            </ul>
          </li>
          <li>2</li>
        </ul> -->
        <ul>
          <li v-for="(item,index) in lists" :key="index">
            <span>
                {{item.title}}
            </span>
            <myList v-if="item.cont-child" :lists="item.cont-child"/>
          </li>
        </ul>
      </div>
      <myCont :list="list"/>
    </section>
    <footer>
       <myFooter />
    </footer>
  </div>
</template>

<script>
import myHeader from './components/header';
import myFooter from './components/footer';
import myCont from './components/cont';
import axios from 'axios';
import myList from './components/list';

export default {
  name: 'App',
  components: {
    myHeader,myFooter,myCont,myList
  },
  data(){
    return {
      list:[],
      lists:[]
    }
  },
  created() {
    // axios.get('/getData').then(({data})=>{
    //   console.log(data);
    //   this.list=data;
    // }),
    axios.get('/getLists').then((data)=>{
      console.log(data);
      this.lists=data;
    })
  },
  methods: {
    
  },
}
</script>

<style>
#app {
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
}
section{
  width: 100%;
  flex:1;
  overflow-y: scroll;
  padding:0 15px;
}
.box{
  margin: 10px 0;
}
header ,footer{
  width: 100%;
  height: 50px;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 15px;
}
</style>
