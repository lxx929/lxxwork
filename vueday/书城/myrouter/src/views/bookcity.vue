<template>
    <div>
        <my-header>
            <ul>
               <router-link to="/bookcity" tag="li">书城</router-link>
               <router-link to="/bookshelf" tag="li">书架</router-link>
            </ul>
        </my-header>
        <Search :flag="flag"></Search>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index"> 
                    <img :src="item.ad_pic_url" alt="">
                </div>
            </div>
        </div>
        <div>
            <h3>本周最火</h3>
            <div class="list">
                <my-list
                v-for="(item,index) in hotList"
                :key="index"
                :img="item.cover"
                :id="item.fiction_id"
                :title="item.title"
                classname="downlist"
                ></my-list>
            </div>
            
        </div>

         <div>
            <h3>重磅推荐</h3>
            <div class="list">
                <my-list
                v-for="(item,index) in list"
                :key="index"
                :img="item.cover"
                 :id="item.fiction_id"
                :title="item.title"
                classname="leftlist"
                ></my-list>
            </div>
            
        </div>
    </div>
</template>
<script>

// import axios from 'axios'
import Swiper from 'swiper'
export default {
    props:{

    },
    components:{
        
    },
    data(){
        return {
            flag:false,
            bannerList:[],
            hotList:[],
            list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.$http.get('/api/home').then((res)=>{
            this.bannerList = res.data.list.items[0].data.data;
            this.hotList = res.data.list.items[1].data.data;
            this.list = res.data.list.items[2].data.data;
            console.log(res.data.list);
            this.$nextTick(()=>{
                new Swiper('.swiper-container');
            });
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
.swiper-container{
    width: 100%;
    height: 200px;
}
.swiper-wrapper,.swiper-slide{
    height: 100%;
    width: 100%;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.list{
    display: flex;
    flex-wrap: wrap;
}
</style>