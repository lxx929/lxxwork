<template>
  <div class="myItem">
    <dl v-for="(item,index) in listData" :key="index">
      <!-- {{item}} -->
      <dt>
        <img :src="item.Image" @alertWarn="tapfun()" alt>
      </dt>
      <dd>
          <p>{{item.Name}}</p>
          <p>{{item.Introduction}}</p>
          <p>￥：{{item.Price}}元</p>
          <p>{{item.NowPromo}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  // props: ["listData"],
  props: {
    listData:Array,
    required:true
  },
  data() {
    return {
        batList: ['香蕉','苹果','芒果','牛油果']
    };
  },
  methods: {
    tapfun(value){
      console.log(value)
    }
  },
  created() {
    this.$emit('alertWarn','aa')
    console.log(this.listData);
  }
};
</script>

<style scoped>
img {
  width: 140px;
  height: 140px;
  display: block;
}
dl{
  border:5px solid lightblue;
 display: flex;

}
p{
    line-height: 30px;
    margin-left: 10px;
}
[v-cloak]{
  display: none;
}
</style>
