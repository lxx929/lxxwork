<template>
  <div class="dcCont">
    <div class="left">
      <div>
        <ul>
          <li
            v-for="(item,index) in datas"
            :key="index"
            :class="{active:index===ind}"
            @click="lefttapfun(index)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div ref="rightlist">
        <RightList v-for="(item,index) in datas" :key="index" :name="item.name" :foods="item.foods"></RightList>
      </div>
    </div>
  </div>
</template>
<script>
import RightList from "../components/list";
import axios from "axios";
import BScroll from "better-scroll";

export default {
  props: {},
  components: {
    RightList
  },
  data() {
    return {
      datas: [],
      ind: 0,
      leftBScroll: null,
      rightBScroll: null,
      scrollY: 0, //滚动距离
      scrollH: [] //距离页面顶部高度的距离
    };
  },
  computed: {
    currentIndex() {
      for (let j = 0; j < this.scrollH.length; j++) {
        let height1 = this.scrollH[j];
        let height2 = this.scrollH[j + 1];
        if (height2 && (this.scrollY > height1 && this.scrollY < height2)) {
          return j;
        }
      }
      return 0;
    }
  },
  methods: {
    init() {
      this.leftBScroll = new BScroll(".left", {
        click: true
      });
      this.rightBScroll = new BScroll(".right", {
        click: true,
        probeType: 3 //probeType获取滚动位置
      });
      this.rightBScroll.on("scroll", apply => {
        //箭头函数里无this，apply参数相当于this
        //probeType获取滚动位置
        // console.log(apply.y);
        this.scrollY = Math.abs(apply.y); //获取滚动距离的绝对值

        this.ind = this.currentIndex;
        // console.log(this.currentIndex,'currentIndex')
      });
    },
    scrollHeight() {
      let height = 0;
      let child = this.$refs.rightlist.children;
      this.scrollH.push(height); //
      for (let i = 0; i < child.length; i++) {
        height += child[i].offsetHeight;
        this.scrollH.push(height);
      }
      //   console.log(this.scrollH);
    },
    lefttapfun(index) {
      this.ind = index;
      //   console.log(this.$refs.rightlist); //通过給元素添加ref，来获取dom节点
      let child = this.$refs.rightlist.children;
      this.rightBScroll.scrollToElement(child[index], 500);

      //   this.rightBScroll.scrollToElement(目标元素,500)//元素滚动到顶
    }
  },
  created() {
    axios.get("/getData").then(({ data }) => {
      //   console.log(data);
      this.datas = data.goods;
      //   console.log(this.datas);
      this.$nextTick(() => {
        //dom结构未创建，用$nextTick执行
        this.init();
        this.scrollHeight();
      });
    });
  },
  mounted() {}
};
</script>
<style scoped lang="">
.dcCont {
  width: 100%;
  height: 90%;
  /* overflow: hidden; */
  display: flex;
}
.left {
  width: 120px;
  height: 100%;
  text-align: center;
  overflow: hidden;
}
ul {
}

li {
  border-bottom: 1px solid #eee;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  height: 50px;
  line-height: 50px;
}
.right {
  height: 100%;
  flex: 1;
  background: lavenderblush;
  padding: 15px;
  overflow: hidden;
}
.active {
  color: lightcoral;
}
</style>