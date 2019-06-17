import React, { Component } from "react";
import Button from "./button";
import data from "../mock/data";
import bus from "../../utils/bus";
export default class Left extends Component {
  state = {
    data: [],
    selected: -1,
    flag: true
  };
  render() {
    let { data, selected } = this.state;
    return (
      <div className="left">
        <div className="buttons" ref="buttons">
          {data.map((item, index) => (
            <Button
              key={index}
              item={item}
              ind={index}
              active={index == selected}
              flag={this.state.flag}
              changeColor={this.handleChange.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({ data });

    document.addEventListener("keyup", this.keyup);

    bus.on("changeOpen", open => {
      this.setState({ flag: open });
    });
  }

  keyup = e => {
    console.log(e.keyCode);
    let { data, flag } = this.state;
    let index = data.findIndex(item => item.keycode == e.keyCode);
    let btns = this.refs.buttons.children[index];
    let audio = btns && btns.querySelector("audio");
    console.log(btns, audio);
    if (flag) {
      audio && audio.play();
    }
  };

  handleChange(ind) {
    this.setState({
      selected: ind
    });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        selected: -1
      });
    }, 300);
  }
}
