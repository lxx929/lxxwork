import React, { Component } from "react";
// const {Provider,Consumer} = React.createContext();
import Context from "../utils/context";
export default class Grad extends Component {
  render() {
    return (
      <div>
        <Context.Consumer>
          {value => {
            console.log(value, "孙子组件");
            return <span>孙子组件：{value.title}</span>;
          }}
        </Context.Consumer>
        {/* 孙子组件 */}
      </div>
    );
  }
}
