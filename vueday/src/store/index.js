import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: [
      {
        title: '很重要-很紧急',
        state: 0,
        id: 10,
        children: []
      },
      {
        title: '重要-不紧急',
        state: 1,
        id: 20,
        children: []
      },
      {
        title: '不重要-紧急',
        state: 2,
        id: 30,
        children: []
      },
      {
        title: '不重要-不紧急',
        state: 3,
        id: 40,
        children: []
      }
    ]
  },
  mutations: {
      addEvent (state, data) {
        let {id, val} = data;
        let item = state.list.find(item => item.id === id);
        if (item) {
          item.children.push({
            title: val,
            id: item.children.length
          })
        }
      },
      changeState (state, data) {
          console.log(data);
          //state 当前切换后的状态  id 切换后的id   oldState 没切换之前的state  liIndex 没切换之前的下标   val文字描述tilte  oldId children旧的id
          let {states, id, oldState, liIndex, val, oldId, itemId} = data;
          if (id !== null && liIndex !== null && oldId !== null) {
            let vals = state.list.find(item => item.state === states);
            if (vals) {
              vals.children.push({title: val, id: vals.children.length})
            }
            // state.list = vals;
            let items = state.list.find(item => item.id === itemId) 
            // console.log(items)
            if (items) {
              items.children.splice(liIndex, 1)
            }

          }
      }
  },
  getters: {
    list: state => state.list
  }
})

window.store = store
export default store