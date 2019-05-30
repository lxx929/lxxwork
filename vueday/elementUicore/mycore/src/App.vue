<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
   return{}
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  user-select: none;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app {
  
}
</style>
