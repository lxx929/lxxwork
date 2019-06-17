import React, { Component } from "react";

export default class Constroll extends Component {
  constructor() {
    super();
    this.state = {
      val: "123",
      text: ""
    };
  }
  render() {
    let { val, text } = this.state;
    return (
      <form className="constroll">
        <input value={val} onChange={this.handleChange.bind(this)} />
        <p>您输入的内容是:{val}</p>

        <hr />

        <textarea value={text} onChange={this.handleText.bind(this)} />
        <p>您输入的textarea内容是:{text}</p>

        <button onClick={this.handleSubmit.bind(this)}>提交</button>
      </form>
    );
  }

  handleChange(e) {
    // console.log('改变',e.target.value);
    this.setState({ val: e.target.value });
  }
  handleText(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state);
  }
}
