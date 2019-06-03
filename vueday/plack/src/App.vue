<template>
    <div class="app">
        <section>
            <!-- 列表部分 -->
            <div>
              <myList 
                v-for="(item,index) in list" 
                :key="index" 
                :title="item.title" 
                :newprice="item.newprice" 
                :oldprice="item.oldprice" 
                :num="item.num" 
                :id="item.id"
                @add="add"/>
            </div>
        </section>
        <!-- 底部 -->
        <myFooter :TotalCount="TotalCount" :TotalnewPrice="TotalnewPrice" :TotalolPrice="TotalolPrice"/>
    </div>
</template>
<script>
import myList from "./components/list";
import myFooter from "./components/footer";
import axios from "axios";
export default {
    props: {},
    components: {
        myList,
        myFooter
    },
    data() {
        return {
            list: [],
            buyList:[]
        };
    },
    computed: {
        TotalCount(){ //总数量
            return this.buyList.reduce((prev,cur) => prev+cur.num,0);
        },
        TotalnewPrice(){ //总价格
            return this.buyList.reduce((prev,cur) => prev+ cur.newprice * cur.num,0);
        },

        TotalolPrice(){ //没优惠之前的总价格
            return this.buyList.reduce((prev,cur) => prev+ cur.oldprice * cur.num,0);   
        }
    },
    methods: {
        add(id){
            console.log(id);
            //通过这个ind来获取整个item
            let ind = this.list.findIndex(item => item.id == id); //获取点击那件商品在原数组中的位置
            
            //通过cur来查看，点击的商品是否在新数组里面存在
            let cur = this.buyList.findIndex(item => item.id == id);
            if(cur == -1){ //不存在，把整个item   push进去，再修改一个num，因为模拟数据的时候，数量是0
                this.list[ind].num =1;
                this.buyList.push(this.list[ind]);
            } else { //如果存在，直接num++;
                this.buyList[cur].num++;
            }
        }
    },
    created() {
        axios.get("/api/city").then(res => {
            this.list = res.data.data;
        });
    },
    mounted() {}
};
</script>
<style  lang="">
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html,
body,
#app,
.app {
    height: 100%;
    width: 100%;
}
.app {
    display: flex;
    flex-direction: column;
}
section {
    flex: 1;
   
}
section div{
     display: flex;
    flex-wrap: wrap;
}
</style>