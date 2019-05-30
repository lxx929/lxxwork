<template>
  <div id="app">
      <router-view/>
  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  list-style: none;
  text-decoration: none;
  margin: 0;
}

#app,html,body {
  width:100%;
  height:100%;
}
.boxWrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header {
  text-align: center;
}
section {
    width: 100%;
    flex: 1;
    overflow-y:auto;
}
</style>
