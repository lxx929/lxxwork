import React, { Component } from "react";
import "./style.css";

export default class Ref extends Component {
  constructor(props) {
    //1次
    super(props);
    this.state = {
      flag: false
    };
    this.handleClick = this.handleClick.bind(this, "green"); //1次
  }

  render() {
    //多次
    return (
      <div className="wrapper">
        <div
          className="red"
          ref="red"
          onClickCapture={e => {
            alert("red");
            console.log(e);
          }}
        >
          <div className="blue" ref="blue">
            <div className="pink" ref="pink">
              <div className="green" ref="green" onClick={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClick(color, e) {
    //最后一个参数里面接受的是事件对象
    console.log(this, e, color);
    alert("green");
  }

  // handleClick=()=>{
  //         console.log(this);
  //         alert('green');
  // }

  componentDidMount() {
    //捕获和冒泡只影响触发顺序，不关心谁被触发
    //触发的元素从当前点击的元素往外触发
    //如果同时有捕获和冒泡，会先执行捕获，再执行冒泡
    //事件三要素：事件源   事件类型   事件处理程序(e)
    let { red, blue, pink, green } = this.refs;
    // red.addEventListener('click',()=>{alert('red')},false)
    blue.addEventListener(
      "click",
      e => {
        console.log(e);
        e.stopPropagation();
        alert("blue");
      },
      true
    );
    // pink.addEventListener('click',()=>{alert('pink')},false)
    // green.addEventListener('click',()=>{alert('green')},true)
  }
}
