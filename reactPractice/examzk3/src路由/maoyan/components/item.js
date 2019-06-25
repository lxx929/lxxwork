import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Item extends Component {
  render() {
    let { item, history } = this.props;
    // console.log(item);
    return (
      <dl>
        <dt>
          <img src={item.img.replace("w.h", "128.180")} />
        </dt>
        <dd>
          <p>{item.nm}</p>
          <p>{item.sc ? `观众评分${item.sc}` : `${item.wish}想看`}</p>
          <p>{item.star}</p>
          <p
            onClick={() => {
              console.log("dianji");
              history.push(`/detail/${item.id}`);
            }}
          >
            {item.globalReleased ? "购票" : "预售"}
          </p>
        </dd>
      </dl>
    );
  }
}

export default withRouter(Item);
// console.log();
