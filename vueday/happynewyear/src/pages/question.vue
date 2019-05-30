<template>
  <div class="question">
    <!-- 顶部福禄寿喜财 -->
    <questionTopLine :options="dataJson"></questionTopLine>
    <!-- 底部答题卡 -->
    <questionContent :options="dataJson"></questionContent>
  </div>
</template>

<script>
import questionContent from "@/components/questionContent.vue";
import questionTopLine from "@/components/questionTopLine.vue";
import dataJson from '@/data/dataList.json'
export default {
    data(){
        return{
            dataJson
        }
    },
  components: { questionContent, questionTopLine },
  created(){
      this.$bus.$on('emptyEvent',()=>{
          this.dataJson=dataJson
      })
  }
};
</script>

<style scoped lang="less">
</style>
