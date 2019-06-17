import React, { Component } from "react";
import bus from "../utils/bus";

export default class Add extends Component {
  state = {
    val: ""
  };
  render() {
    return (
      <div>
        <input
          value={this.state.val}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handlekeydown.bind(this)}
        />
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      val: e.target.value
    });
  }
  handlekeydown(e) {
    if (e.keyCode === 13) {
      bus.emit("inputAdd", {
        val: this.state.val,
        isChecked: false,
        status: "todo"
      });
    }
  }
}
