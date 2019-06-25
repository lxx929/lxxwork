import { createStore, combineReducers } from "redux";
import Count from "../views/count";

import count from "./count/index";
import list from "./list/index";

console.log(require("redux"));

// const reducer = (state = { count: 30, list: [] }, action) => {
//     return {
//         count: count(state.count, action),
//         list: list(state.list, action)
//     }
// }

const reducer = combineReducers({
  count,
  list
});

// switch (action.type) {
//     case 'ADD':
//         newState.count++
//         break;
//     case 'DEL':
//         newState.count--;
//         break;
//     case 'ADD_Msg':
//         newState.list.push(action.val)
//         break;
//     case 'DEL_Msg':
//         newState.list.splice(action.index,1)
//         break;
//     default:
//         break;
// }
// return newState;

const store = createStore(reducer);
window.store = store;

export default store;

// console.log(store.getState());

// store.dispatch({type:'ADD'})

// store 仓库

// views    dispatch({type:'ADD',val:123})
// reducer(state,action)  //上一次的状态 action ,把最新的状态return

// getState() //获取状态

// subscribe(()=>{this.setState({})})   接受的参数是一个函数，监听
