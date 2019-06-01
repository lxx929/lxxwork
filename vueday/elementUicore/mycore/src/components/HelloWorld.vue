<template>
  <div class="main">
    <div class="top">
      <h2>VUEADMIN</h2>
      <div class="head">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>一键智能</el-dropdown-item>
            <el-dropdown-item>用户中心</el-dropdown-item>
            <el-dropdown-item>设置更多</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="user">
          张某某
          <img src="../../static/image/a.gif" alt>
        </div>
      </div>
    </div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>Navigator One
            </template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>Navigator Two
            </template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>Navigator Three
            </template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="headTop">
            <h4>table</h4>
            <p>
              <b>导航一</b>/
              <a href="#">table</a>
            </p>
          </div>
          <div class="search">
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
            <el-row>
              <el-button type="primary">查询</el-button>
              <el-button type="primary">新增</el-button>
            </el-row>
          </div>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140"></el-table-column>
            <el-table-column prop="name" label="Name" width="120"></el-table-column>
            <el-table-column prop="address" label="Address"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    };
    return {
      tableData: Array(20).fill(item),
      input: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main {
  margin-top: 70px;
}
.headTop {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}
p {
  display: flex;
}
.el-row {
  display: flex;
  margin: 0 50% 0 20px;
}
.el-input__inner {
  width: 200px !important;
}
.search {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  background: rgb(228, 228, 228);
}
h2 {
  width: 200px;
}
.user {
  display: flex;
  align-items: center;
}
.head .el-dropdown {
  color: aliceblue;
}
.head {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.top {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 75px;
  background: #20a1ff;
  color: aliceblue;
}
img {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
}
</style>
