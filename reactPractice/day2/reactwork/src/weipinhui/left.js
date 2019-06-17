import React, { Component } from "react";
import bus from "../utils/bus";
export default class Left extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log(this.props);
    let { list } = this.props;
    return (
      <div className="left">
        <ul>
          {list.map((item, index) => (
            <li key={index} onClick={this.handleChange.bind(this, index)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  handleChange(ind) {
    console.log("dianji", ind);
    bus.emit("add", ind);
  }
}
