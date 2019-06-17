import React, { Component } from "react";
import bus from "../../utils/bus";
export default class Right extends Component {
  state = {
    open: true,
    step: 1
  };
  render() {
    let { open } = this.state;
    return (
      <div className="right">
        <div className="top">
          <h3>power</h3>
          <div
            className={open ? "poweractive" : "power"}
            onClick={this.handleChangeColor.bind(this)}
          />
        </div>
        <div>
          <input
            type="range"
            min="1"
            max="70"
            value={this.state.step}
            onChange={e => {
              this.setState({ step: e.target.value });
            }}
            disabled={!open}
          />
        </div>
      </div>
    );
  }
  handleChangeColor() {
    this.setState(
      {
        open: !this.state.open
      },
      () => {
        bus.emit("changeOpen", this.state.open);
      }
    );
  }
}
