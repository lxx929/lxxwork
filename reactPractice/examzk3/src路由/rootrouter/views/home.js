import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <div />;
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="home">
        首页
        <Child />
      </div>
    );
  }
}
