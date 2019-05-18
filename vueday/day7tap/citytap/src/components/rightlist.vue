<template>
  <div class="right">
    <ul>
      <li
      v-for="(item,index) in datar[0]"
      :key="index"
      >{{item.name}}</li>
    </ul>
    
  </div>  
</template>

<script>
export default {
  props:{
    datar:Array
  }
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
</style>
