import React, { Component } from "react";

import List from "./list";
export default class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let { list } = this.props;
    return (
      <div className="comment">
        {list &&
          list.map((item, index) => (
            <List key={index} name={item.name} con={item.con} />
          ))}
      </div>
    );
  }
}
