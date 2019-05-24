<template>
  <div>
    <p
      v-for="(item,index) in menuList"
      :key="index"
      :class="{on:index===i}"
      @click="checkMenu(index,item.id)"
    >{{item.txt}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0
    };
  },
  computed: {
    menuList() {
      return this.$store.state.menuList;
    }
  },
  methods: {
    /**
     * 选择菜单
     */
    checkMenu(index, id) {
      this.i = index;
      this.$store.commit("changeMenuId", id);
      // this.$store.state.menuId=id
    }
  }
};
</script>

<style scoped>
div{
  background: lavender;
}
p{
  line-height: 50px;
  text-align: center;
}
.on {
  background: red;
}
</style>
