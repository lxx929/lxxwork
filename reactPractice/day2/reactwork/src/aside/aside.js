import React, { Component } from "react";
import Coll from "./coll";
import data from "./data";
import "./style.css";

export default class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  render() {
    let { data } = this.state;
    return (
      <div className="aside">
        <Coll
          group={data}
          open={num => {
            console.log("父组件函数，修改状态", num);
            let list = [...data];
            list.map(item => (item.isOpen = false));
            list[num].isOpen = !list[num].isOpen;
            this.setState({
              data: list
            });
          }}
        />
      </div>
    );
  }
}
