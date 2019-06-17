import React, { Component } from "react";
import Add from "./add";
import TodoContent from "./todocontent";

export default class App extends Component {
  render() {
    return (
      <div>
        <Add />
        <TodoContent />
      </div>
    );
  }
}
