import React, { Component } from "react";
import Head from "../components/head";
import Foot from "../components/foot";
import islogin from "../utils/islogin";

// islogin 来判断是否登录
// class IsLogin extends Component{
//     state = {
//         islogin:false
//     }
//     render(){
//         return this.state.islogin ? <My />:null
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

class My extends Component {
  render() {
    return (
      <div>
        <Head back={false} title="我的" />
        <section>我的</section>
        <Foot />
      </div>
    );
  }
}

export default islogin(My);
