<template>
    <div class="pling">
       <p><label>用户名</label><input type="text" v-model="val"></p>
       <p><label>密码</label><input type="text" v-model="pwd"></p>
       <button @class="add">登录</button>
    </div>
</template>
<script>
let ster = JSON.parse(window.localStorage.getItem('use')) || []
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            val:'',
            pwd:''
        }
    },
    computed:{

    },
    methods:{
        add(){
            let obj = {
                name:this.val,
                pwd:this.pwd
            }
            ster.push(obj)
            window.localStorage.setItem('use',JSON.stringify(ster))
        }
        
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.pling{
    width: 100%;
}

button{
    width: 100%;
    height: 35px;
    background: red;
}
</style>