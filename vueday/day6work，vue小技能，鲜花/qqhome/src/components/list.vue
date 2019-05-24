<template>
    <div class="list">
        <ul>
            <li v-for="(item,index) in datas" :key="index" @click="tapfun(index)" :class="{active:index===i}">
                <img :src="item.tou" alt="">
                <div class="text">
                    <p class="title"><b>{{item.tit}}</b><time>{{item.time}}</time></p>
                    <p><span>{{item.cont}}</span> <span class="info">{{item.id}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props:['datas'],
    data(){
    return{
        i:1
    }
  },
  created() {
      console.log()
  },
  methods: {
    tapfun(index){
      this.i=index;
    }
  },
}
</script>

<style scoped>
.info{
    width: 20px;
    height: 20px;
    display: inline-block;
    background: rgb(233, 16, 16);
    color: aliceblue;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
}
ul{
    width: 100%;
    height: 100%;
    background: #fff;
}
li{
    width: 100%;
    height: 70px;
    display: flex;
    padding: 0 15px;
    align-items: center;
    border-bottom:1px solid #eee;
}
.text{
    flex:1;
}
p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 30px;
}
p{
  display: flex;
  justify-content: space-between;
}
.title{
    display: flex; 
    justify-content: space-between;
}
span{
    width: 240px;
     display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
time,p{
    color:#999;
    font-size: 14px;
}
b{
    font-size: 16px;
    color:#000;
}
img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 10px 0 0;
    border:1px solid #ccc;
}
.active{
    background: rgb(241, 241, 241);
}
</style>
