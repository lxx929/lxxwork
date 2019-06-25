import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

export default class Foot extends Component {
    render() {
        return (
          <footer>
            <NavLink to="/home">首页</NavLink>
            <NavLink to="/kind">分类</NavLink>
            <NavLink to="/shop">购物车</NavLink>
            <NavLink to="/my">我的</NavLink>
          </footer>
        );
    }
}
