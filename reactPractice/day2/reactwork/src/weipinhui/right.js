import React, { Component } from "react";
import bus from "../utils/bus";
export default class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ind: 0
    };
  }
  render() {
    console.log(this.props);
    let { list } = this.props;
    let { ind } = this.state;
    console.log(list);
    return (
      <div className="right">
        {list[ind] &&
          list[ind].children.map((item, index) => {
            return (
              <dl key={index}>
                <dt>
                  <img src={item.img} />
                </dt>
                <dd>{item.title}</dd>
              </dl>
            );
          })}
      </div>
    );
  }
  componentDidMount() {
    bus.on("add", ind => {
      this.setState({ ind });
    });
  }
}
