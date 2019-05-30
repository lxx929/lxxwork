<template>
    <div class="boxWrap">
        <my-header>
            <ul>
                <router-link to="/bookcity" tag="li">书城</router-link>
                <router-link to="/bookself" tag="li">书架</router-link>
            </ul>
            <span>个人</span>
        </my-header>
        <section>
            <Search :flag="flag" @change="change" />
            <div class="content">
                <my-list v-for="(item1,index1) in bookshelfList" :key="index1" :img="item1.cover" :title="item1.title" :authors="item1.authors" :summary="item1.summary" :id="item1.fiction_id" :classname="classname">
                    <template v-if="classname=='leftlist'">
                        <p>{{item1.authors}}</p>
                        <p>{{item1.summary}}</p>
                    </template>

                </my-list>
            </div>

        </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            flag: true,
            classname: 'leftlist',
            bookshelfList: []
        }
    },
    computed: {

    },
    methods: {
        change() {
            this.classname = this.classname == 'leftlist' ? 'downlist' : 'leftlist'
        }
    },
    created() {
        axios.get('/api/recommend1').then((res) => {
            console.log(res.data)
            this.bookshelfList = res.data.items
        })

    },
    mounted() {

    }
}
</script>
<style scoped lang="">

.content {
    display: flex;
    flex-wrap: wrap;
}
</style>