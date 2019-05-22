<template>
  <div class="right">
    <ul>
      <li
      v-for="(item,index) in datar[0]"
      :key="index"
      @click="rightfn"
      >{{item.name}}</li>
    </ul>
    
  </div>  
</template>

<script>
export default {
  props:{
    datar:Array
  },
  data(){
    return{

    }
  },
  methods: {
    rightfn(){
console.log(1)
    }
  },
};
</script>

<style scoped>
.right{
    flex:1;
    height: 100%;
    overflow-y: scroll;
    background: lawngreen;
    padding: 10px;
}
ul{
    display: flex;

    flex-wrap: wrap;
}
li{
    text-align: center;
    margin: 10px 0;
    width: 30%;
    height: 40px;
    line-height: 40px;
    border-radius: 15px;
    background: lightsalmon;
}
.active{
  background: salmon;
  border:1px solid #999;
}
</style>
