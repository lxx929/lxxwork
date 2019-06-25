import React, { Component } from "react";
import Context from "./uitls/context";
import connect from "./uitls/connect";
class Son extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        son
        {}
      </div>
    );
  }
}

export default connect(state => {
  return {
    list: state.list
  };
})(Son);
