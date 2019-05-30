<template>
    <div>
        恭喜您，答对{{total}}
        <button @click="again">再来一遍</button>
    </div>
</template>

<script>
export default {
data(){
    return{
        total:localStorage.total
    }
},
methods:{
    /**
     * 再来一次
     */
    again(){
        this.$router.push('/')
        // 清空本地
        localStorage.removeItem('total')
        //数据初始化
        // this.$bus.$emit('emptyEvent')
        location.reload()
    }
}
}
</script>

<style>

</style>
