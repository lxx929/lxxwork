import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Item extends Component {
  render() {
    let { item } = this.props;
    // console.log(this.props);
    let { history } = this.props;
    return (
      <dl
        onClick={() => {
          history.push(`/detail/${item.id}`);
          // history.push({
          //     pathname:`/detail/${item.id}`,
          //     query:item
          // })
        }}
      >
        <dt>
          <img src={item.img} />
        </dt>
        <dd>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </dd>
      </dl>
    );
  }
}

export default withRouter(Item);
