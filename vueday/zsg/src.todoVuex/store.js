import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { //状态，把需要在多个组件之间共享数据，放在这里
        list: []
    },
    getters: {

    },
    mutations: { //同步方法
        getListmutations(state, list) {
            state.list = list
        },
        addListmutations(state, obj) {
            state.list.unshift(obj)
        },
        updatedListmutations(state, obj) {
            let index = state.list.findIndex(item => item.id == obj.id)
            state.list.splice(index, 1, obj)
        },
        deleteListmutations(state, id) {
            state.list = state.list.filter(item => item.id != id)
        },
        filterListmutations(state, list) {
            state.list = list
        }
    },
    actions: { //异步方法
        getList({ commit }) {
            axios.get('http://jsonplaceholder.typicode.com/todos').then((rs) => {
                console.log(rs.data)
                commit('getListmutations', rs.data)
            })
        },
        addList({ commit }, title) {
            axios.post('http://jsonplaceholder.typicode.com/todos', { title, completed: false, userId: 1 }).then((rs) => {
                commit('addListmutations', rs.data)
            })
        },
        updatedList({ commit }, obj) {
            axios.put(`http://jsonplaceholder.typicode.com/todos/${obj.id}`, obj).then((rs) => {
                console.log(rs)
                commit('updatedListmutations', rs.data)
            })
        },
        deleteList({ commit }, id) {
            axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then((rs) => {
                console.log(rs)
                commit('deleteListmutations', id)
            })
        },
        filterList({ commit }, count) {
            axios.get('http://jsonplaceholder.typicode.com/todos/?_limit=' + count).then((rs) => {
                console.log(rs.data)
                commit('filterListmutations', rs.data)
            })
        }
    }
})