<template>
  <div>
    <h3>{{obj.questions}}</h3>
    <ul>
      <li
        v-for="(item,index) in obj.options"
        :class="{on:index===i}"
        :key="index"
        @click="answerQuestionFn(item,index)"
      >
        <span v-if="item.xh===obj.answer&&isshow">√</span>
        {{item.xh}}:{{item.txt}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      i: null,
      isAnswered:false,//是否作答
      isshow: false,
      obj: {} //存放该路由一道题的对象
    };
  },
  watch: {
    $route: {
      handler: function(newval, oldval) {
        this.obj = this.options[newval.params.index];
        this.options[newval.params.index].isRouteActive = true;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    /**
     * 选择答案
     * 1、判断对错
     */
    answerQuestionFn(item, index) {
        if(this.isshow){return} //是否已经答过题，如果已经答过题就不允许在更改
        
      this.isshow = true;
      this.i = index;
      //   判断
      if (item.xh === this.obj.answer) {
        //答对了
        this.obj.flag = true;
        if (localStorage.total) {
          //已经有total，说明不是第一次
          localStorage.total++;
        } else {
          //第一次答对题
          localStorage.total = 1;
        }
      } else {
        //打错了
        this.obj.flag = false;
      }
      //跳下一题
    // 当前路由下标
    let routeIndex = this.$route.params.index
    setTimeout(()=>{
        // //为了防止出现样式复用，所以跳转时将数据恢复到原始状态
        this.isshow=false
        this.i=null
        if(routeIndex<this.options.length-1){
            this.$router.push('/question/'+(++routeIndex))
        }else{
            this.$router.push('/end')
        }
    },1000)
    }
  }
};
</script>

<style>
.on {
  background: pink;
}
</style>
