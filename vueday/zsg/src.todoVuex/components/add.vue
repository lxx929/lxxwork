<template>
    <div class="addList">
        <input type="text" v-model="val">
        <button @click="addList(val)">添加</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
          val:''
        }
    },
    computed:{
       
    },
    methods:{
        ...mapActions(['addList'])
    //    addList(){
    //        console.log(111)
    //     }
    },
    created(){
       
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.addList{
    width: 80%;
    height: 50px;
    margin-left: 10%;
    display: flex;
    align-items: center;
}
.addList button{
    width: 100px;
    height: 22px;
}
.addList input{
    flex:1
}
</style>