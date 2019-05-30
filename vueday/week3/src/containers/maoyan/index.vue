<template>
  <div class="warper">
    <router-view></router-view>
    <div class="header">
      <li style="color:red">正在上映</li>
      <li >
        <router-link to="/maoyan/dianyin">即将上印</router-link>
      </li>
    </div>
    <div class="main">
      <div class="contain">
        <div class="item" v-for="item in list" :key="item.id" @click="tab()">
          <div class="i-left"></div>
          <div class="i-right">
            <li v-text="item.tit"></li>
            <li v-text="item.people"></li>
            <li v-text="item.day"></li>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <li @click="tab1()">
        <router-link to="/dianying">电影</router-link>
      </li>
      <li>
        <router-link to="/yingyuan">影院</router-link>
      </li>
      <li>
        <router-link to="/my">我的</router-link>
      </li>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "aaa",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    //生命周期调用
    this.getdata();
  },
  methods: {
    //发起请求
    getdata() {
      axios.get("/getlist").then(res => {
        this.list = res.data.data;
      });
    },
    // tab1(){
    //   this.$router.history.push({
    //     name:"maoyan",
    //     params:{
          
    //     }
    //   })
    // }
  },
  components: {
    axios
  }
};
</script>

<style>
@import url("../../css/style.css");
</style>
