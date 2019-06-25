import React, { Component } from "react";
const islogin = Com => {
  return class extends Component {
    state = {
      islogin: false
    };
    render() {
      return this.state.islogin ? <Com {...this.props} /> : null;
    }
    componentDidMount() {
      let user = window.localStorage.user;
      let { history } = this.props;
      if (user) {
        //已经登录
        this.setState({ islogin: true });
      } else {
        //没有登录
        history.push("/login");
      }
    }
  };
};

export default islogin;
