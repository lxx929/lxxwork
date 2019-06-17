import React, { Component } from "react";
import Left from "./left";
import Right from "./right";
import "./style.css";
import request from "../utils/request";

export default class App extends Component {
  state = {
    list:[],
  };
  render() {
    let { list } = this.state;
    return (
      <div className="wrapper">111
        <Left list={list} />
        <Right list={list} />
      </div>
    );
  }

  componentDidMount() {
    
    request.get("/api/list").then(res => {
      console.log(res);
      if (res.code === 1) {
        this.setState({
          list: res.data
        });
      }
    });
  }
}
