import React, { Component } from "react";
import Children from "./children";
import Son from "./son";
import Context from "./uitls/context";

let data = {
  num: 1,
  list: [
    {
      name: "1701B",
      count: 41
    }
  ]
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Context.Provider value={data}>
          <Children />
          <Son />
        </Context.Provider>
      </div>
    );
  }
}
