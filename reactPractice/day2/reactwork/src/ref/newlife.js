import React, { Component } from "react";

export default class NewLife extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: "1701"
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
    console.log("render");
    return (
      <div>
        <div
          onClick={() => {
            this.setState({
              grade: "1701B周三"
            });
          }}
        >
          {this.state.grade}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    //Snapshot快照,要配合componentDidUpdate一起使用
    console.log("getSnapshotBeforeUpdate");
    return {
      aa: 123
    };
  }

  componentDidUpdate(prevProps, prevState, value) {
    console.log(prevProps, prevState, value, "componentDidUpdate");
  }
}
