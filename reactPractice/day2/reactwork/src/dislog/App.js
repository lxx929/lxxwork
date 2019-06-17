import React, { Component } from "react";
import "./style.css";
import Dialog from "./dialog";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "打开alert提示框",
          title: "提示",
          content: "确定执行此操作?",
          type: "alert"
        },
        {
          name: "打开confirm提示框",
          title: "请输入姓名",
          type: "confirm"
        },
        {
          name: "打开prompt提示框",
          title: "提示",
          content: "操作成功",
          type: "prompt"
        }
      ],
      isShow: false,
      obj: {}
    };
  }

  render() {
    let { list, isShow, obj } = this.state;
    return (
      <div className="wrap">
        <ul>
          {list.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                console.log(item);
                // obj = item;
                this.setState({
                  isShow: true,
                  obj: item
                });
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        {isShow ? (
          <Dialog
            obj={obj}
            close={() => {
              console.log("close");
              this.setState({
                isShow: false
              });
            }}
          />
        ) : null}
      </div>
    );
  }
}
