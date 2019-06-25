import React from "react";
// import logo from './logo.svg';
import "./App.css";

import Count from "./views/count";
import Message from "./views/message";

class App extends React.Component {
  render() {
    return (
      <div>
        <Count />
        <Message />
      </div>
    );
  }
}
export default App;
