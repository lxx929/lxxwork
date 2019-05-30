<template>

    <dl>
        <dt><img :src="item.img" alt=""></dt>
        <dd>
            <p class="pll">{{item.title}}</p>
            <p>观众评: {{item.gpin}}</p>
            <p>主演：{{item.zhuin}}</p>
            <span :class="item.tle == '购票'? 'red': 'blue'">{{item.tle}}</span>
        </dd>
    </dl>

    
</template>
<script>
export default {
    props:['item'],
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
        // console.log(this.item)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl{
    width: 100%;
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    position: relative;
}

dl dt{
    width: 69px;
    height: 97px;
    margin:0 10px;
}

dl dt img{
    width: 100%;
    height: 100%;
}

dl dd p{
    font-size: 13px;
    padding: 5px 0;
}

.pll{
    font-size: 16px;
    font-weight: 600;
}

dl dd span{
    position: absolute;
    top: 50%;
    right: 20px;
    padding: 3px 6px;
}
.blue{
    background: blue;   
    color: #fff
}
.red{
    background: blue;   
    color: #fff
}
</style>