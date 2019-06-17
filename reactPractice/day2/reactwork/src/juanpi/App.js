import React, { Component } from "react";

import Head from "./header";
import Size from "./size";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count:1,
      obj: {
        header: {
          title: "美英吉普夏季男士纯棉短袖T恤衫韩版宽松大码打底衫男装体恤",
          price: 39
        },
        content: {
          size: ["M", "L", "XL"],
          color: ["靠脸吃饭黑色", "靠脸吃饭红色", "靠脸吃饭蓝色"],
          count: 1
        }
      }
    };
  }

  render() {
    console.log(this.state.obj);
    let { header, content } = this.state.obj;
    return (
      <div>
        <Head header={header} />
        <Size
          content={content}
          add={num => {
            console.log("add", num);
            content.count = num;
            this.setState({
              obj: { ...this.state.obj, content }
            });
          }}
        />
      </div>
    );
  }
}
