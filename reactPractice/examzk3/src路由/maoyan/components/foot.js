import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export default class Foot extends Component {
  render() {
    return (
      <footer>
        <NavLink to="/movie">电影</NavLink>
        <NavLink to="/cinema">影院</NavLink>
        <NavLink to="/my">我的</NavLink>
      </footer>
    );
  }
}
