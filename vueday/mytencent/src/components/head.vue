<template>
  <div class="head">
    <div class="toplogo">
      <img src="../../static/image/logo.png" alt>
      <ul>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">产品</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-circle-check-outline">CODING个人版</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check-outline">Cloud Stadio</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check-outline">CODING企业版</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <a href="https://dev.tencent.com/help/">
            <span>文档</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="oper">
      <el-input placeholder="请输入搜索内容" suffix-icon="el-icon-search" v-model="input1"></el-input>
      <ul class="iconul">
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="iconclass el-icon-circle-plus-outline"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="iconclass el-icon-news"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="iconclass el-icon-date"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="iconclass el-icon-s-platform"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
      <div class="self">
        <span>刘某某</span>
        <img src="../../static/image/a.gif" alt>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span>刘某某</span>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-plus">
              <span @click="$router.push({name:'myset'})">个人设置</span>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">
              <span @click="$router.push({name:'information'})">我的主页</span>
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">
              <span @click="outfun()">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      input1: ""
    };
  },
  computed: {},
  methods: {
    outfun(){
      let ls=window.localStorage;
      ls.clear();
      this.$router.push('/login');
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.self {
  display: flex;
  width: 160px;
  height: 60px;
  line-height: 60px;
}
.el-input--suffix {
  width: 200px;
}

.self img {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin: 5px 20px;
}
.iconclass {
  font-size: 18px;
  color: rgb(66, 66, 66);
}

.iconul {
  display: flex;
  margin: 0 30px;
}
ul.iconul li {
  margin: 0 20px;
}

.oper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #cccccc;
  position: fixed;
  top:0;
  left:0;
  background: #ffffff;
}
.toplogo,
.toplogo ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
}
.toplogo {
  margin: 0;
}
li {
  margin: 0 15px;
}
li span,
li span a {
  font-size: 14px;
  cursor: pointer;
  /* background: #ffffff; */
}
img {
  vertical-align: middle;
}
ul{
  color: rgb(58, 58, 58) !important;
}
</style>