import React, { Component } from "react";

export default class newLife extends Component {
  constructor(props) {
    console.log("初始化");
    super(props);
    this.state = {
      grader: "1701B"
    };
  }
  // componentWillMount(){
  //     console.log('componentWillMount');
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("zujian正在被渲染");
    let { grader } = this.state;
    return (
      <div className="wrapper">
        <div
          onClick={() => {
            this.setState({
              grader: "最新的班级1701"
            });
          }}
        >
          {grader}
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log("组件渲染结束");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return {
      aa: 132
    };
  }

  componentDidUpdate(prevProps, prevState, value) {
    console.log(prevProps, prevState, value, "componentDidUpdate");
  }
}
