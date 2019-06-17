import React, { Component } from "react";

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("子组件的render");
    let { count } = this.props;
    console.log(this.props, "子组件");
    return (
      <div className="detail">
        <p>数量:{count}</p>
        <button
          onClick={() => {
            this.props.add(count + 1);
          }}
        >
          点击
        </button>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps子组件里面");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, "shouldComponentUpdate子组件");
    // if(nextState.list.length > 0){
    //     return true;
    // }
    // if(!nextState.flag){
    //     return false;
    // }

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("组件将要被更新子组件", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("组件更新完成子组件", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
