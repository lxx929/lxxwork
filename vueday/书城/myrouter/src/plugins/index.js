import myHeader from '@/components/header'
import myList from '@/components/list'
import Search from '@/components/search'
import axios from 'axios'
export default {
    install(Vue, options) {
        console.log(Vue, options)

        Vue.component('myHeader', myHeader);
        Vue.component('myList', myList);
        Vue.component('Search', Search);
        Vue.prototype.$http = axios;
    }
}