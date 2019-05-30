<template>
  <div id="app">
    <Add/>
    <Preduce/>
  </div>
</template>

<script>
import Add from "./components/add";
import Preduce from "./components/preduce";

export default {
  name: "App",
  components: {
    Add,
    Preduce
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
#app {
}
</style>
