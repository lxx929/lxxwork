<template>
    <div class="mentr">
        <h3>近期最受欢迎</h3>
        <myTaper  v-for="(item,index) in list" :key="index" :item="item.erty"></myTaper>
        
    </div>
</template>
<script>
import myTaper from '../components/taper'

export default {
    props:{

    },
    components:{
        myTaper

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
         this.$http.get('/api/getda').then((res) => {
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
}
</style>