<template>
  <div id="app">
     <header>
       <h2>{{title}}</h2>
     </header>
 
     <section>
       
     </section>

     <div class="mark">
       遮罩
     </div>
  </div>
</template>

<script>
import mylist from './components/mylist'

export default {
  name: 'App',
  data(){
    return{
      title:"购物车"
    }
  },
  components: {
    mylist
  }
}
</script>

<style>
#app {
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 position: relative;
}
header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: lightcoral;
}
h2{
  width: 100%;
  text-align: center;
}
section{
  width: 100%;
  flex:1;
  overflow-y: scroll;
}
.mark{
  width: 100%;
  height: 100px;
  background: rgba(0,0,0,.4);
  position: absolute;
  left: 0;
  bottom: 10px;
}
</style>
