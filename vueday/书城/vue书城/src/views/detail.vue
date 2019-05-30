<template>
    <div>
    <my-header>
    <span @click="$router.go(-1)"><</span>
    <span class="name">{{$route.query.title}}</span>
    <router-link to="/bookcity">首页</router-link>
    </my-header>
    <div class="run" v-if="mes">这本书的信息是:{{mes}}</div>
    <my-list :img="item.cover"
    :title="item.title"
    classname="leftlist"
    v-else
    >
    <p class="p">{{item.authors}}</p>
    <p class="p">{{item.summary}}</p>
    </my-list>
    <button v-if="!mes"  @click="goToread">开始阅读</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            item:{},
            mes:''
        }
    },
    computed:{

    },
    methods:{
        goToread(){
          
            this.$router.push({path:'/read'})
        }
    },
    created(){
        axios.get('/api/detail?id='+this.$route.params.id).then((res)=>{
            if(res.data.code==1){
                 this.item=res.data.data.item
            }else{
                this.mes=res.data.mes
            }
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
header{
    width: 100%;
    height: 45px;
    background: #ccc;
    display: flex;
}
.name{
    width: 210px;
    margin-left: -70px;
}

a{
    line-height: 45px;
    color: red;
    font-size: 20px;
      margin-left: 70px;
}
.run{
    color: blue;
    font-size: 20px;
    margin-left: 30px;
    margin-top: 50px;
}


</style>