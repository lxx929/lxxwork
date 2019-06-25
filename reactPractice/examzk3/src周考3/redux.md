redux是一个单独的，脱离了react也可以用

下载redux

引入

创建仓库 createStore(reducer)

createStore(reducer,applymiddle)

reducer(state = {},action)=>{ action.type

switch(action.type){ case 'ADD': retrun{

 }
}

}

getState()
dispatch({type:''})
subscribe(()=>{}) //监听
react-redux

入口文件
<>
在每一个视图组件 {connect} from 'react-redux'
onClick={()=>{ this.props.addcount(tilte) }}

export default connect((state)=>{ return{

}
},(dispatch)=>{ return { addcount(title){ dispatch({type:'',title:''}) } } })(组件)