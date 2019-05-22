<template>
    <div class="cont">
        <dl v-for="(item,index) in list" :key="index">
            <dt>
              假装这里有图
            </dt>
            <dd>
                <p>{{item.tit}}</p>
                <span>{{item.cont}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
 props:["list"]
}
</script>

<style scoped>
dl{
    width: 100%;
    height: 100px;
    background: lightcoral;
    display: flex;
    margin: 10px 0;
}
dt{
    width: 120px;
    height: 100%;
    background: lightgray;
    margin-right: 15px;
}
</style>
