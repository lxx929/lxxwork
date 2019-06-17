import React, { Component } from "react";
import bus from "../utils/bus";

import List from "./list";
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  render() {
    //  console.log(this.props);
    let { list } = this.state;
    return (
      <div className="comment">
        {list &&
          list.map((item, index) => (
            <List key={index} name={item.name} con={item.con} />
          ))}
      </div>
    );
  }

  componentDidMount() {
    bus.on("add", obj => {
      console.log(obj);
      let { list } = this.state;
      this.setState({
        list: [...list, obj]
      });
    });
  }
}
