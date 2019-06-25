import React, { Component } from "react";
import islogin from "../utils/islogin";

// 接受一个组件类，返回一个新的组件
// class IsLogin extends Component{
//     state = {
//         islogin:false
//     }
//     render(){
//         return this.state.islogin ? <Detail />:null
//     }
//     componentDidMount(){
//         let user = window.localStorage.user;
//         let {history} = this.props;
//         if(user){ //已经登录
//             this.setState({islogin:true})
//         } else{ //没有登录
//             history.push('/login')
//         }
//     }
// }

class Detail extends Component {
  render() {
    console.log(this.props);
    return <div>详情{this.props.match.params.id}</div>;
  }
}

export default islogin(Detail);
