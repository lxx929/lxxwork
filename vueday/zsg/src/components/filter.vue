<template>
    <div>
        <h3>筛选</h3>
        <select @change="filterList(count)" v-model="count">
            <option value="150">150</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
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
            count:100
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(['filterList'])
        // change(count){
        //      console.log(count)
        // }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
select{
   width: 100px;
}
</style>