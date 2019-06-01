<template>
  <div>
    个人事项：啥都没有，空空如也！
    <hr>
    <template>
      <el-transfer v-model="value" :data="data"></el-transfer>
    </template>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    const generateData = _ => {
      const data = [];
      // for (let i = 1; i <= 15; i++) {
      //   data.push({
      //     key: i,
      //     label: `vuex `
      //   });
      // }
      data.push({
        label: `vuex`,
      });
      return data;
    };
    return {
      data: generateData(),
      value: [1]
    };
  },
  // data(){
  //     return{
  //         datas:[
  //             {
  //                 title:'vuex'
  //             },{
  //                 title:'路由'
  //             }
  //         ]
  //     }
  // },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>