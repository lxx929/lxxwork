import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { name, con } = this.props;
    return (
      <div className="list">
        <span>{name}:</span>
        <span>{con}</span>
      </div>
    );
  }
}
