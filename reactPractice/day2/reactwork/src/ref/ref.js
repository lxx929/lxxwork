import React, { Component } from "react";
import Detail from "./detail";
import { findDOMNode, unmountComponentAtNode } from "react-dom";

export default class Ref extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: "1701B周三"
    };
  }
  render() {
    return (
      <div className="wrapper">
        <div ref="box">这是一个ref组件</div>
        <div
          ref={dom => {
            if (dom) {
              console.log(dom);
              console.log("函数式的ref");
            }
          }}
          onClick={() => {
            this.setState({ grade: "1701B周四" });

            unmountComponentAtNode(document.getElementById("root"));
          }}
        >
          这是第二个ref组件:{this.state.grade}
        </div>
       <hr/>
        <Detail ref="detail" />
      </div>
    );
  }

  componentDidMount() {
    console.log(this.refs);
    console.log(unmountComponentAtNode);
    console.log(findDOMNode(this.refs.detail));
    console.log(findDOMNode(this));
  }
}
