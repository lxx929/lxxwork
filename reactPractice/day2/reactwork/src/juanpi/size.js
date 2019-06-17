import React, { Component } from "react";

export default class Size extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log(this.props);
    let { size, color, count } = this.props.content;
    return (
      <div>
        <ul>
          {color.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {size.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          <span>-</span>
          <span>{count}</span>
          <span
            onClick={() => {
              console.log(1111);
              this.props.add(count + 1);
            }}
          >
            +
          </span>
        </div>
      </div>
    );
  }
}
