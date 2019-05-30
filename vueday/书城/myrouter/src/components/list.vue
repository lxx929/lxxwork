<template>
    <dl :class="classname" @click="$router.push({name:'detail',params:{id:id},query:{title:title}})">
        <dt>
            <img v-lazy="img" alt="">
        </dt>
        <dd>
            <h3>{{title}}</h3>
            <slot></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        img:String,
        title:String,
        classname:String,
        id:Number
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
        // console.log(this.img);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl.downlist{
    width: 33%;
}
dl.leftlist{
    display: flex;
    width: 100%;
}
dl dt {
    height: 120px;
    width: 120px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
dl.leftlist dd{
    flex: 1;
}
</style>