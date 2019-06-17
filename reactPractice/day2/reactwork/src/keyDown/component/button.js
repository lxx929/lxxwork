import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { item, ind, active } = this.props;
    console.log(active);
    return (
      <div
        onClick={this.handleClick.bind(this, ind)}
        className={active ? "active" : ""}
      >
        {item.name}
        <audio src={item.source} ref={"audiodom"} />
      </div>
    );
  }
  handleClick(ind) {
    console.log("handle");
    if (this.props.flag) {
      this.refs.audiodom.play();
    }
    this.props.changeColor(ind);
  }
}
