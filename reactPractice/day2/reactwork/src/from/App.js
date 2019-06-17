import React, { Component } from "react";
import Constroll from "./constroll";
import UnConstroll from "./unconstroll";
export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Constroll />
        <hr />
        <UnConstroll />
      </div>
    );
  }
}
