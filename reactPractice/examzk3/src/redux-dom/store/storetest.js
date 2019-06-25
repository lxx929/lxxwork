// import {} from 'redux'

let { createStore } = require("redux"); //{createStore}
// console.log(createStore); //方法

//两个参数，第一个是上一次的状态，action,是一个对象{type:''}
const reducer = (state, action) => {
  // 参数  返回值  功能  何时调用
  console.log(state, "reducerstate");
  console.log(action, "reduceraction");
  let newState = { ...state };
  switch (action.type) {
    case "add":
      newState.count++;
      break;
    case "del":
      newState.count--;

      break;
    default:
      break;
  }

  return newState; //返回的是最新的状态
};

const store = createStore(reducer, { count: 30 }); //创建仓库

// getState()  获取的是reducer的结果
console.log(store.getState()); // {dispatch,getstate,subscribe}

//触发的dispatch,就会调用reducer这个方法，并且dispatch传递的参数，被action接受了
store.dispatch({ type: "add" }); //参数必须是一个对象，必须要有一个type属性
console.log(store.getState(), "add");

store.dispatch({ type: "del" }); //参数必须是一个对象，必须要有一个type属性
console.log(store.getState(), "del");
