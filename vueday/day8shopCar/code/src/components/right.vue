<template>
  <div class="main">
    <rightItem v-for="(item,index) in rightObj" :key="index" :options="item"/>
  </div>
</template>

<script>
import rightItem from "./rightItem.vue";
export default {
  components: { rightItem },
  computed: {
    rightObj() {
      return this.$store.getters.rightObj;
    }
  },
  created() {
    this.$store.dispatch("getRightList");
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  /* justify-content: space-between */
}
</style>
