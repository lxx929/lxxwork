import React, { Component } from "react";
import Drag from "./drag";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <Drag width={300} height={300} />
      </div>
    );
  }
}
