<template>
   <footer>
       <span>数量{{TotalCount}}</span>
       <span>总价:{{TotalnewPrice}}</span>
       <span>优惠:{{TotalolPrice-TotalnewPrice}}</span>
   </footer>
</template>
<script>
export default {
    props:{
        TotalCount:Number,
        TotalnewPrice:Number,
        TotalolPrice:Number
    },
    components:{

    },
    data(){
        return {

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
footer{
    height: 50px;
    width: 100%;
    border-top: 1px solid #ccc;
}
</style>