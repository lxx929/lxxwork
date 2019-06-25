redux

{createStore} from 'redux'

const reducer = (state = {},action)=>{ state //上一次的状态，action {type:''} let newstate = {...state} switch(action.type){ case 'ADD': newstate.count++; return newstate; //最新的状态 } }

const store = createStore(reducer);

store.getState(); //

store.dispatch({type:'ADD'}) //

下载react-redux

引入

App.js 从react-redux结构出来Provider(提供)，把store仓库传递下去
connect连接组件和仓库,高阶组件 connect是一个函数
connect(mapStateToProps,mapDispatchToProps) //返回值还是一个函数
connect()(组件) //第二括号里面必须要放一个组件

函数： mapStateToProps //映射仓库的状态到组件的props mapDispatchToProps //映射仓库的dispatch到组件的props