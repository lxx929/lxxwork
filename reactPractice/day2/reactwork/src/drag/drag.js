import React, { Component } from "react";

export default class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      top: 0
    };
  }
  static defaultProps = {
    height: 100,
    width: 100,
    background: "red",
    position: "absolute"
  };
  render() {
    console.log(this.props);
    let { height, width, background, position } = this.props;
    let { left, top } = this.state;
    return (
      <div
        className="drag"
        style={{ height, width, background, position, left, top }}
        onMouseDown={this.mousedown.bind(this)}
      />
    );
  }
  mousedown(e) {
    let { clientX, clientY } = e;
    let { left, top } = this.state;
    this.disx = clientX - left;
    this.disy = clientY - top;
    console.log("mousedown", clientX, clientY, this);
    document.addEventListener("mousemove", this.mousemove, false);

    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", this.mousemove, false);
      },
      false
    );
  }

  mousemove = e => {
    console.log(this);
    let left = e.clientX - this.disx;
    let top = e.clientY - this.disy;
    this.setState({ left, top });
  };
  componentWillUnmount() {}
}
// Drag.defaultProps = {
//     height:100,
//     width:100,
//     background:'red'
// }
