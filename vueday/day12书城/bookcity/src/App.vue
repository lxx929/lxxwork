<template>
  <div id="app">
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

import Home from '@/view/home';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
  background: lavenderblush;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app {
   display: flex;
   flex-direction: column;
}
</style>
