import React, { Component } from "react";
import Top from "./top";
import Comment from "./comment";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="wrapper">
        <Top />
        <Comment />
      </div>
    );
  }
}
