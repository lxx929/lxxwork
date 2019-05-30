<template>
    <footer>
        <router-link to="/dining">电影</router-link>
        <router-link to="/yinteng">影院</router-link>
        <router-link to="/older">我的</router-link>
    </footer>
</template>
<script>
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
footer a{
    flex: 1;
    text-align: center;
    padding: 15px 0;
}

footer .router-link-active{
    color: orangered;
}
</style>