import React, { Component } from "react";
import store from "../store/index";
export default class Count extends Component {
  constructor() {
    super();
    // this.setState({})
    store.subscribe(() => {
      this.setState({});
    });
  }
  render() {
    console.log(store);
    let { count } = store.getState();
    return (
      <div>
        <button onClick={this.handladd.bind(this, false)}>-</button>
        <span>{count}</span>
        <button onClick={this.handladd.bind(this, true)}>+</button>
      </div>
    );
  }
  handladd(flag) {
    let type = flag ? "ADD" : "DEL";
    store.dispatch({ type });
  }
}
