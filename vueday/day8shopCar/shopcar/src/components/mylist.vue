<template>
  <dl>
    <dt>
      <div class="redbox">
        <b></b>
        <div class="num"></div>
      </div>
    </dt>
    <dd></dd>
  </dl>
</template>

<script>
export default {
  props: ["dataJson"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.redbox b {
  text-align: center;
  display: block;
  width: 100%;
  height: 110px;
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
