<template>
    <dl class="list">
       <dt>假装这里也有图标</dt>
        <dd>
            <b>{{txt}}</b>
            <br>
            <span>{{cont}}</span>
        </dd>
    </dl>
</template>

<script>
export default {
  props:["txt","cont"]
}
</script>

<style scoped>
dl{
    width: 50%;
    display: flex;
}
dt{
    width: 60px;

}
</style>
