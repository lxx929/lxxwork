import React, { Component } from "react";
import Top from "./top";
import Comment from "./comment";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }
  render() {
    let { list } = this.state;
    return (
      <div className="wrapper">
        <Top
          add={obj => {
            console.log(obj, "top");
            this.setState(
              {
                list: [...list, obj]
              },
              () => {
                console.log(this.state.list);
              }
            );
          }}
        />
        <Comment list={list} />
      </div>
    );
  }
}
