<template>
  <div class="huojia">
    <leftvue class="left"></leftvue>
    <rightvue class="right"></rightvue>
    <div class="cover" v-show="isShow">
      <div class="car">
          <button @click="emptyCar">清空</button>
        <div v-for="(item,index) in carShopList" :key="index">
          <span>{{item.title}}</span>
          <span>{{item.price}}</span>
          <!-- <p>
            <button>-</button>
            {{item.count}}
            <button>+</button>
          </p> -->
         <btnVue :options="item"/>
        </div>
      </div>
    </div>
    <div class="total" @click="isShow=!isShow">
      <p>总价 {{totalPrice | fomatePrice}}</p>
      <p>总数{{totalCount}}</p>
    </div>
  </div>
</template>

<script>
import btnVue from '@/components/btnVue.vue'
import leftvue from "@/components/left.vue";
import rightvue from "@/components/right.vue";
import { mapState, mapGetters,mapMutations,mapActions } from "vuex";
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    leftvue,
    rightvue,
    btnVue
  },
  computed: {
    ...mapGetters(["carShopList",'totalCount','totalPrice']),

  },
  created() {
    this.$store.dispatch("getMenuList");
    this.$store.dispatch("getRightList");
  },
  methods:{
      /**
       * 触发mutations
       */
      emptyCar(){
          this.$store.commit('emptyCar')
          this.isShow=false
      }
      // ...mapMutations(['emptyCar'])
  }
};
</script>

<style scoped lang="less">
.huojia {
  display: flex;
  position: relative;
  justify-content: space-around;
  .cover {
    width: 100%;
    position: absolute;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .car {
      background: #fff;
      position: absolute;
      bottom: 50px;
      width: 100%;
      div{
          display: flex;
          justify-content: space-around;
      }
    }
  }
}
.left {
  width: 100px;
}
.right {
  flex: 1;
}
.total {
  position: fixed;
  bottom: 40px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  height: 50px;
  line-height: 50px;
  color: #fff;
  display: flex;
  justify-content: space-around;
}
</style>
