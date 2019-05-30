<template>
    <div class="main">
        <myHeader></myHeader>
        <div class="ment">
            <div class="ment-top">
                <p class="pl">北京</p>
                <router-link to="shaning" tag='p'>正在热映</router-link>
                <router-link to="puted" tag='p'>即将上映</router-link>
                <p class="pl">搜索</p>
            </div>

            <div class="mencenter"> 
                 <router-view></router-view>
            </div>
        </div>

        <myFooter></myFooter>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
      
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.ment-top{
    width: 100%;
    display: flex;
}
.ment-top p{
    flex: 1;
    text-align: center;
    padding: 15px 0;

}

.ment-top .pl{
    font-style: 13px !important;
}

.ment-top .router-link-active{
    color: orange;
    border-bottom: 1px solid orange;
}

.mencenter{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    /* overflow: hidden; */
}


</style>