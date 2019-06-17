import React, { Component } from "react";
import Left from "./left";
import Right from "./right";
import "./index.css";
export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Left />
        <Right />
      </div>
    );
  }
}
