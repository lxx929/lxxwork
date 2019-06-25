import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Head extends Component {
  render() {
    return (
      <div>
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/manage">客户管理</NavLink>
      </div>
    );
  }
}
