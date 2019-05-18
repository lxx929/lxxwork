<template>
<div>
    <!-- <div class="cont">
        什么也没有，空空如也！
    </div> -->
    <div class="cont">
       <div class="title">
           <h4>{{title}}</h4>
           <span>已放弃</span>
       </div>
       <p>{{content}}</p>
       <div class="times">
           <b>面试时间：{{time}}</b>
           <span>已提醒</span>
       </div>
    </div>
</div>
</template>

<script>
export default {
  props:['title','content','time','type','bool']
}
</script>

<style scoped>
.cont{
  border-bottom: 10px solid rgb(238, 238, 238);
  padding: 15px;
  line-height: 30px;
}
p{
    color:rgb(124, 124, 124);
}
.title{
    display: flex;
    justify-content: space-between;
}
.title h4{
    font-size: 20px;
}
.title span{
    background: rgb(245, 218, 222);
    color:rgb(255, 118, 64);
    padding: 1px 10px;
}
.times{
    display: flex;
    justify-content: space-between;
    color:#999;
    font-size: 18px;
}
.times b{
    font-weight: normal;
}
.times span{
    background: rgb(240, 240, 240);
    color:rgb(121, 121, 121);
    padding: 1px 10px;
}
</style>
