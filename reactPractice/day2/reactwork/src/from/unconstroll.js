import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
import { findDOMNode } from "react-dom";
import Sw from "./swiper";

export default class Unconstroll extends Component {
  constructor() {
    super();
    this.sec = React.createRef();
    this.swipe = React.createRef();
  }

  render() {
    return (
      <form className="constroll">
        <input defaultValue="123" ref={dom => (this.val = dom)} />
        <button onClick={this.handleSubmit.bind(this)} ref="button">
          点击
        </button>

        <div>
          <input ref={this.sec} />
        </div>

        <Sw ref={this.swipe} />
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.sec.current.value);
    console.log(this.val.value);
  }

  componentDidMount() {
    console.log(findDOMNode(this.swipe.current));
    new Swiper(findDOMNode(this.swipe.current));
  }
}
