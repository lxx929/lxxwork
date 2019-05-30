<template>
<div class="mentr">
    <myList  v-for="(item,index) in list" :key="index" :item="item"></myList>
</div>
    
</template>
<script>
import myList from '../components/list'
export default {
  
    components:{
        myList
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
         this.$http.get('/api/list').then((res) => {
            console.log(res.data.data)
            this.list = res.data.data
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.mentr{
    width: 100%;
    overflow-y: auto;
}
/* dl{
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
} */
</style>