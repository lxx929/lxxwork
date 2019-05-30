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
  margin: 0;
  list-style: none;
  text-decoration: none;
  outline: 0;
  box-sizing: border-box;
  color: #333;
}

html,body,#app{
  width: 100%;
  height: 100%;
}
 .main{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
}

.ment{
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header{
  width: 100%;
  padding: 15px 0;
  background: orange;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

footer{
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
}
</style>
