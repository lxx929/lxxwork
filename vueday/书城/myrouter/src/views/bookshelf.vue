<template>
    <div>
         <my-header>
            <ul>
               <router-link to="/bookcity" tag="li">书城</router-link>
               <router-link to="/bookshelf" tag="li">书架</router-link>
            </ul>
        </my-header>
        <Search :flag="flag" @change="change"/>
        <div class="list">
            <my-list
            v-for="(item,index) in recommendList"
            :key="index"
            :img="item.cover"
            :title="item.title"
            :id="item.fiction_id"
            :classname="name"
            >
                <template v-if="name == 'leftlist'">
                    <p>{{item.authors}}</p>
                    <p>{{item.summary}}</p>
                </template>
            </my-list>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
    props:{

    },
    components:{
    },
    data(){
        return {
            flag:true,
            name:'leftlist',
            recommendList:[]
        }
    },
    computed:{

    },
    methods:{
        change(){
            console.log(99);
            this.name = this.name == 'leftlist' ? 'downlist' :'leftlist';
        }
    },
    created(){
        this.$http.get('/api/recommend').then((res)=>{
            console.log(res.data);
            this.recommendList = res.data.list.items;
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
ul{
    height: 44px;
    width: 100%;
    display: flex;
}
ul li{
    flex:1;
    line-height: 44px;
    text-align: center;
}
.list{
    display: flex;
    flex-wrap: wrap;
}
</style>