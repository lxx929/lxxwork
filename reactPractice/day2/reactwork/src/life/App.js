import React, { Component } from "react";

import request from "./utils/request";
import Detail from "./detail";
import   './index.css'
import "./mock/list";

export default class App extends Component {
  constructor(props) {
    //初始化函数，接受props，设置组件的默认状态（state）
    console.log("初始化函数");
    super(props);
    this.state = {
      list: [],
      count: 1,
      flag: false
    };
  }
  componentWillMount() {
    console.log("组件将要被渲染的时候");
  }

  static defaultProps={
    marginLeft:"50px"
  }
  render() {
    console.log(
      "组件正在被渲染的时候触发的，进行diff算法，产生最小化差异，局部更新dom"
    );
    let { list, count, flag } = this.state;
    let { marginLeft } = this.props;

    return (
      <div className="wrapper">
        <p style={{ marginLeft }} className={flag?"active":""}>{this.state.flag ? "show" : "hide"}</p>
        <button
          style={{ marginLeft }}
          onClick={() => {
            this.setState({
              flag: !this.state.flag
            });
          }}
        >
          点击
        </button>
        <h3>--------------子组件-------------</h3>
        {flag ? (
          <Detail
            count={count}
            add={num => {
              console.log(num);
              this.setState({
                count: num
              });
            }}
          />
        ) : null}
        {list.map((item, index) => {
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
    console.log("组件渲染结束");
    request.get("/api/data").then(res => {
      console.log(res);
      let { list } = res;
      this.setState({ list });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "shouldComponentUpdate");
    // if(nextState.list.length > 0){
    //     return true;
    // }
    // if(!nextState.flag){
    //     return false;
    // }

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("组件将要被更新", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("组件更新完成", prevProps, prevState);
  }
}
