import React from "react";
// import logo from './logo.svg';

import Count from "./views/count";
import Message from "./views/message";
import { Provider } from "react-redux";
import store from "./store/index";
console.log(require("react-redux"));
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Count />
          <Message />
        </Provider>
      </div>
    );
  }
}
export default App;
