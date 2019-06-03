<template>
    <dl>
        <dt>
            <img src="" alt="">
        </dt>
        <dd>
            <p>名称：{{title}}</p>
            <p>单价:{{newprice}}</p>
            <p>原价:{{oldprice}}</p>
            <p @click="$emit('add',id)">+</p>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        title:String,
        newprice:Number,
        oldprice:Number,
        num:Number,
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

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 3px;
    justify-content: center;
    align-items: center;
}
dl dt{
    height: 120px;
    width: 100px;
    background: red;
}
</style>