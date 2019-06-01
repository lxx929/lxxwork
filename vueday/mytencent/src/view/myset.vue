<template>
  <div class="set">
    <div class="setLeft">
       <p>个人账户</p>
      <el-menu>
        <el-menu-item @click="$router.push({name:'mytip'})"><i class="iconclass el-icon-s-platform"></i> 个人设置</el-menu-item>
        <el-menu-item @click="$router.push({name:'product'})"><i class="iconclass el-icon-s-platform"></i> ssh公钥</el-menu-item>
        <el-menu-item @click="$router.push({name:'mytip'})"><i class="iconclass el-icon-s-platform"></i> 访问令牌</el-menu-item>
        <el-menu-item @click="$router.push({name:'product'})"><i class="iconclass el-icon-s-platform"></i> 提醒设置</el-menu-item>
        <el-menu-item @click="$router.push({name:'product'})"><i class="iconclass el-icon-s-platform"></i> 开放生态</el-menu-item>
        <el-menu-item @click="$router.push({name:'mytip'})"><i class="iconclass el-icon-s-platform"></i> 关联CODING账号</el-menu-item>
      </el-menu>
    </div>
    <div class="setright">
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
p{
  line-height: 80px;
  background: #fff;
  padding: 0 20px;
}
.set {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 90px 0 30px 0;
  display: flex;
  overflow-y: scroll;
}
.setLeft {
  width: 200px;
  margin-right: 10px;
}
.setright {
  flex: 1;
  background: rgb(255, 255, 255);
}
</style>