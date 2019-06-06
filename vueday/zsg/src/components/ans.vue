<template>
    <div>
         <h3>{{answerList[ind].title}}</h3>
         <ul>
             <li 
             v-for="(item,index) in answerList[ind].answer" 
             :key="index" 
             :class="{'active':index==cur}"
             @click="change(index,item)"
             >
             <span>{{changeType(index,item)}}、{{item.answer_name}}</span>
             </li>
         </ul>
    </div>
</template>
<script>
import {mapState,mapMutations, mapActions} from 'vuex'
import { stat } from 'fs';
export default {
    props:{
    
    },
    components:{
     
    },
    data(){
        return {
            //  cur:null
        }
    },
    computed:{
        ...mapState(['answerList','ind','cur'])
    },
    methods:{
        ...mapMutations(['changeInd','changecur']),
        ...mapActions(['changeIndActions']),
        changeType(type){
              switch (type) {
                case 0: return 'A'
                break;
                case 1: return 'B'
                break;
                case 2: return 'C'
                break;
                case 3: return 'D'
                break;
           }
        },
        change(ind,item){
            // this.cur=ind
            if(this.ind==this.answerList.length-1){
                  this.$router.push({name:'last'})
            }
            this.changecur(ind)
            this.changeIndActions(item)
        },
      
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
h3{
    color: coral;
}
ul>li{
    line-height: 50px;
    color: brown;
    font-size:20px;
}
li.active{
    color: skyblue;
}
</style>