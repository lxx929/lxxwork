<template>
  <p>
      <!-- {{options}} -->
    <button @click="reduce(options)" v-if="options.count">-</button>
    <span v-if="options.count">{{options.count}}</span>
    <button @click="add(options)">+</button>
  </p>
</template>

<script>
export default {
  props: ["options"],
  methods: {
    reduce(item) {
      item.count--;
    },
    add(item) {
      item.count++;
    }
  }
};
</script>

<style>
</style>
