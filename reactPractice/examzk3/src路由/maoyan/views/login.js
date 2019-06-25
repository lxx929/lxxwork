import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {
  state = {
    name: "",
    pwd: ""
  };
  render() {
    let { name, pwd } = this.state;
    return (
      <div>
        <input
          placeholder="请输入账号"
          value={name}
          onChange={this.handleChange.bind(this)}
        />
        <input
          placeholder="请输入密码"
          type="password"
          value={pwd}
          onChange={this.handleChangePwd.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>登录</button>
      </div>
    );
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  handleChangePwd(e) {
    this.setState({ pwd: e.target.value });
  }
  handleSubmit() {
    let { name, pwd } = this.state;
    let { history } = this.props;
    axios.post("/api/login", { name, pwd }).then(({ data }) => {
      console.log(data);
      if (data.code == 1) {
        window.localStorage.user = pwd;
        history.go(-1);
      }
    });
  }
}
