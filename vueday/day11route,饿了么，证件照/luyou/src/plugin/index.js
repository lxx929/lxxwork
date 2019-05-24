import myFooter from '@/components/footer'; //全局footer组件

export default {
    install(Vue) {
        console.log(Vue);

        Vue.component('myFooter', myFooter);
    }
}