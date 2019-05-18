<template>
  <div class="left">
    <ul>
      <!-- <li>left</li> -->
      <li
        v-for="(item,index) in datas"
        :key="index"
        @click="leftTap(index)"
        :class="{'active':index===ind}"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    datas: Array
  },
  data() {
    return {
      ind: 0
    };
  },
  created() {},
  methods: {
    leftTap(index) {
      this.ind = index;
      this.$emit('tapfn',index)
    }
  }
};
</script>

<style scoped>
.left {
  width: 100px;
  height: 100%;
  overflow-y: scroll;
  border-left: 1px solid lavender;
  background: lightblue;
}

li {
  text-align: center;
  background: rgb(9, 183, 241);
  color: #fff;
  margin: 5px;
  line-height: 40px;
  border-radius: 5px;
  cursor: pointer;
}

.active {
  background: lightcoral;
  border: 1px solid #999;
}
</style>
