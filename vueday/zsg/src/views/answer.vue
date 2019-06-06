<template>
    <div>
       <ul class="title">
           <li v-for="(item,index) in answerList" :key="index">
              <span>{{item.type}}</span>
              <p v-if="item.flag==true">√</p>
              <p v-if="item.flag==false">×</p>
           </li>
       </ul>
       <my-ans></my-ans>
    </div>
</template>
<script>
import myAns from '@/components/ans'
import {mapState} from 'vuex'
export default {
    props:{

    },  
    components:{
         myAns
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['answerList'])
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
.title{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
}
.title>li{
    flex: 1;
    text-align: center;
    color:coral
}
.title li>span:nth-child(1){
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    background: #ccc;
    display: inline-block;
}
</style>