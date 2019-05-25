<template>
  <div class="home">
    <header>
      <input type="text" placeholder=" 搜索饿了么商家、商品名称" @click="goToSearch">
      <!-- <router-link to="/search" tag="input" type="text" placeholder=" 搜索饿了么商家、商品名称">搜索</router-link> -->
    </header>
    <section>
      <ul>
        <li
          v-for="(item,index) in datas"
          :key="index"
          @click="goToShop(item.id,index)"
          v-bind:class="{active:index===ind}"
        >{{item.title}}</li>
      </ul>
      <button @click="loginUser">登录</button>
    </section>
    <myFooter></myFooter>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  components: {},
  data() {
    return {
      ind: 0,
      datas: [
        { title: "小笼包", id: 1 },
        { title: "烤肉拌饭", id: 2 },
        { title: "麻辣烫", id: 3 },
        { title: "鲜香油泼面", id: 4 }
      ]
    };
  },
  beforeCreate() {
    let userId = window.localStorage.getItem("userId");
    console.log(userId,"home")
    if (!userId) {
      window.localStorage.setItem("userId", "");
      console.log(userId,"homeerr")
    }
  },
  created() {
    // console.log(this.$router)
    // console.log(this.$route)
  },
  methods: {
    goToSearch() {
      // this.$router.push('/search');
      this.$router.push({ path: "/search", query: { val: "123" } });
      // this.$router.replace({path:'/search',query:{val:"456"}});
      // this.$router.push({name:'search'});
    },
    goToShop(id, index) {
      // this.$router.push({path:'shop',query:{id:id}});//通过id跳动态，但是不推荐使用
      this.$router.push({ name: "shop", params: { id: id } }); //params配name
      this.ind = index;
    },
    loginUser() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
input {
  width: 90%;
  outline: 0;
  text-align: center;
  line-height: 28px;
  margin: 10px auto;
  display: block;
}
ul {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
}
.active {
  color: lightcoral;
}
</style>
