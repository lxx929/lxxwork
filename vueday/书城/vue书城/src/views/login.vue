<template>
    <div>
    <input type="text" placeholder="请输入用户名" v-model="name">
    <input type="password" placeholder="请输入密码" v-model="pwd">
    <button @click="goTologin">登录</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            name:'',
            pwd:''
        }
    },
    computed:{

    },
    methods:{
        goTologin(){
            console.log(this.name,this.pwd)
            axios.post('/api/login',{name:this.name,pwd:this.pwd}).then((res)=>{
                console.log(res)
                if(res.data.code==1){
                    window.localStorage.setItem('userId','1234')
                    this.$router.push({path:'/read'})
                }
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
input{
    width: 280px;
    height: 30px;
    display: flex;
}
</style>