import React, { Component } from "react";

export default class List extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log(this.props);
    let { obj } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={obj.isChecked}
          onChange={this.handleChange.bind(this)}
        />
        <span>{obj.val}</span>
        <button onClick={this.handeleDelete.bind(this)}>删除</button>
      </div>
    );
  }

  handleChange() {
    console.log("点击");
    let { ind } = this.props;
    let { status } = this.props.obj;
    this.props.ChangeDone(ind, status);
  }
  handeleDelete() {
    let { ind } = this.props;
    let { status } = this.props.obj;
    this.props.deleteDone(ind, status);
  }
}
