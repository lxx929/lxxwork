<template>
    <div>
        <h1>恭喜您</h1>
        <span>一共答对{{getLength}}道题</span>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['getLength'])
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

</style>