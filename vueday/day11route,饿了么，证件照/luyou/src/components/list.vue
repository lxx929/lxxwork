<template>
    <div class="rightList">
        <h3>{{name}}</h3>
        <div class="rightListCont">
            <dl v-for="(item,index) in foods" :key="index">
                <dt>
                    <img :src="item.image" alt="">
                </dt>
                <dd>
                    <b>{{item.name}}</b>
                    <p>{{item.description}}</p>
                    <span class="continfo">{{item.info}}</span>
                    <span>￥：{{item.price}}</span>
                </dd>
            </dl>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
       name:String,
       foods:Array
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
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
dt{
    width: 90px;
    height: 90px;
    margin-right: 5px;
}
dt>img{
  width: 90px;
    height: 90px;
    display: block;
}
dd span.continfo,p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>