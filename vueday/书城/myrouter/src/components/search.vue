<template>
    <div class="search">
        <p @click="$router.push({name:'search'})"></p>
        <button v-show="flag" @click="$emit('change')">按钮</button>
    </div>
</template>
<script>
export default {
    props:['flag'],
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
.search{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.search p{
    flex: 1;
    height: 44px;;
    border: 1px solid #ccc;
}
.search button{
    width: 120px;
}
</style>