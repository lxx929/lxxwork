<template>
    <dl :class="classname" @click="goToDetail(id)">
        <dt><img v-lazy="img" alt=""></dt>
        <dd>
            <span>{{title}}</span>
            <slot></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    props: ['img', 'id', 'authors', 'summary', 'title', 'classname'],
    components: {

    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        goToDetail(id){
            this.$router.push({name:'detail',params:{id:id},query:{title:this.title}})
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style scoped lang="">
dl.downlist {
    width: 33.3%;
}

dl dt {
    width: 120px;
    height: 120px;
}

dl dt img {
    width: 100%;
    height: 100%;
}

dl.leftlist {
    display: flex;
    width: 100%;
}

dl dd {
    flex: 1;
}
</style>