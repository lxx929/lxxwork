import React, { Component } from "react";
import Parent from "./parent";
// const {Provider,Consumer} = React.createContext();
import Context from "../utils/context";
export default class App extends Component {
  state = {
    title: "传家宝"
  };
  render() {
    return (
      <div>
        <Context.Provider value={{ title: this.state.title }}>
          <Parent />
        </Context.Provider>
      </div>
    );
  }
}
