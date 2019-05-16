import Vue from 'vue'
//定义全局组件
Vue.component("my-header", {
    template: `<h1 style="color:red">刘祥祥真帅</h1>`
})
const myButton = {
    data() {
        return {
            count: 0
        }
    },
    props: ['options'],
    components: {
        "my-input": {
            template: `<input type="text" value="123"/>`
        }
    },
    methods: {
        add() {
            this.count++
        }
    },
    template: `<div>
    <my-input></my-input>
    <button @click='add'>点我试试{{count}}</button><span>{{options}}</span>
    </div>`
}
new Vue({
    el: "#app",
    data: {
        msg: "刘祥祥",
        show: true,
        img: '1.png',
        url: './src/images/1.png'
    },
    components: {
        myButton
    },
    beforeCreate() {
        console.log(this.show)
        console.log(document.getElementById('h1'))
    },
    created() {
        setTimeout(() => {
            this.show = false
        }, 3000)
    }
})

//////
new Vue({
    el: "#app2"
})