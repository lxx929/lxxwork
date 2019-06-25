import React, { Component } from "react";
import Router from "./router/index";
import "./css/style.scss";
import { Provider } from "react-redux";
import store from "./store/index";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
