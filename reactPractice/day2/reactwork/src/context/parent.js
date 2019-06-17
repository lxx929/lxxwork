import React, { Component } from "react";

// console.log(context);//上下文  Consumer消费者   Provider提供
import Son from "./son";

export default class Parent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        爷爷组件：
        <Son />
      </div>
    );
  }
}
