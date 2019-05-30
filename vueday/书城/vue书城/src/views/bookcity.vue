<template>
  <div class="boxWrap">
    <my-header>
      <ul>
        <router-link to="/bookcity" tag="li">书城</router-link>
        <router-link to="/bookself" tag="li">书架</router-link>
      </ul>
      <span>个人</span>
    </my-header>
    <section>
      <Search :flag="flag"/>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
            <img :src="item.ad_pic_url" alt>
          </div>
        </div>
      </div>

      <div>
        <h3>本周最火</h3>
        <div class="content">
          <my-list
            v-for="(item,index) in hotList"
            :key="index"
            :img="item.cover"
            :title="item.title"
            :authors="item.authors"
            :summary="item.summary"
            :id="item.fiction_id"
            class="downlist"
          ></my-list>
        </div>
      </div>

      <div>
        <h3>重磅推荐</h3>
        <div class="content">
          <my-list
            v-for="(item1,index1) in remodList"
            :key="index1"
            :img="item1.cover"
            :title="item1.title"
            :authors="item1.authors"
            :summary="item1.summary"
            :id="item1.fiction_id"
            class="leftlist"
          ></my-list>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Swiper from "swiper";
import axios from "axios";
export default {
  props: {},
  components: {},
  data() {
    return {
      flag: false,
      bannerList: [],
      hotList: [],
      remodList: []
    };
  },
  computed: {},
  methods: {},
  created() {
    axios.get("/api/home").then(res => {
      this.bannerList = res.data.items[0].data.data;
      this.hotList = res.data.items[1].data.data;
      this.remodList = res.data.items[2].data.data;
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          autoplay: {
            delay: 1000
          }
        });
      });
    });
  },
  mounted() {}
};
</script>
<style scoped lang="">
header {
  text-align: center;
}
.swiper-container {
  width: 100%;
  height: 200px;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: 200px;
}

.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>