<template>
  <div class="right">
    <dl>
      <dt>
        <div class="redbox">
          <!-- <b>{{$store.state.count}}</b> -->
          <b>{{add}}</b>
          <div class="num">
            <!-- <button @click="$store.commit('add')">+1</button>
            <button @click="$store.commit('reduce')">-1</button> -->
             <button>+1</button>
            <button>-1</button>
          </div>
        </div>
      </dt>
      <!-- <dd>{{counts}}</dd> -->
    </dl>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="您确认购买？">
      <p>确认</p>
      <p>取消</p>
    </el-dialog>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from "vuex";
export default {
  props: ["dataJson"],
  data: function() {
    return { visible: false };
  },
  methods: {},
  components: {},
  computed: {
      ...mapMutations(['add','reduce'])
    // counts() {
    //   return this.$store.state.count;
    // }
  }
};
</script>

<style scoped>
.redbox b {
  text-align: center;
  display: block;
  width: 100%;
  height: 110px;
  font-size: 20px;
}
.num {
  display: flex;
  justify-content: flex-end;
}
.num input {
  width: 30px;
  text-align: center;
}
.num button {
  width: 30px;
  font-size: 20px;
}
.num button:active {
  background: lightblue;
}

dl {
  margin: 10px 0;
  width: 120px;
}
dd {
  width: 120px;
}
dd span {
  width: 120px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #999;
}
dd b {
  width: 120px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: rgb(80, 80, 80);
}

.redbox {
  width: 120px;
  height: 150px;
  background: lightcoral;
}
</style>
