import React, { Component } from "react";
import bus from "../utils/bus";

export default class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      con: ""
    };
  }
  render() {
    let { val, con } = this.state;
    return (
      <div className="top">
        <div>
          <span>用户名：</span>
          <input
            value={val}
            name="val"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <span>评论内容：</span>
          <input
            value={con}
            name="con"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <button onClick={this.handleSubmit.bind(this)}>发布</button>
      </div>
    );
  }

  handleChange(e) {
    //  console.log(e.target)
    let target = e.target;
    console.log(target.name);
    let name = target.name;
    let val = target.value;

    this.setState({
      [name]: val
    });
  }
  handleSubmit() {
    console.log(this.state);
    let obj = {
      name: this.state.val,
      con: this.state.con
    };
    //  this.props.add(obj);
    bus.emit("add", obj);
    this.setState({
      val: "",
      con: ""
    });
  }
}
