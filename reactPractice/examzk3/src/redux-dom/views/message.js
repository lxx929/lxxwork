import React, { Component } from "react";
import Input from "./input";
import List from "./list";
export default class Message extends Component {
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    );
  }
}
