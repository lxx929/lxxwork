<template>
  <div>
    <div>
      <my-header>
        <span>&lt;</span>
        <span>{{$route.query.title}}</span>
      </my-header>
      <div v-if="mes">{{mes}}</div>
      <my-list :img="item.cover" :id="item.fiction_id" :title="item.title" class="leftlist" v-else>
        <p>{{item.authors}}</p>
        <p>{{item.summary}}</p>
      </my-list>
      <button v-if="!mes" @click="$router.push({name:'ready'})">开始阅读</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      item: {},
      mes: ""
    };
  },
  computed: {},
  methods: {},
  created() {
    let id = this.$route.params.id;
    this.$http.get("/api/detail?id=" + id).then(res => {
      console.log(res);
      if (res.data.code == 1) {
        this.item = res.data.list.item;
      } else {
        this.mes = res.data.mes;
      }
    });
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>