<template>
    <div class="todoList">
    <h3>待办事项</h3>
    <ul>
        <!-- {{list}} -->
        <li 
        v-for="(item,index) in list" 
        :key="index" 
        :class="{'active':item.completed}"
        @dblclick="click(item)"
        >
            <span>{{item.title}}</span>
            <span @click="deleteList(item.id)">删除</span>
        </li>
    </ul>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
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
         ...mapState(['list']),
        //  getList()
    },
    methods:{
         ...mapActions(['getList','updatedList','deleteList']),
         
         click(item){
             const obj={
                        "userId": item.userId,
                        "id": item.id,
                        "title": item.title,
                        "completed": !item.completed
            }
            this.updatedList(obj)
        }
    },
    created(){
             this.getList()
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.todoList{
    width: 80%;
    margin-left: 10%;
}
.todoList ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.todoList ul li{
    padding: 5px 8px;
    background: skyblue;
    color:#fff;
    margin: 5px;
}
.todoList ul li.active{
    background: salmon
}
</style>