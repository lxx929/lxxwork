import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Home extends React.Component {
  render() {
    return <div>首页视图</div>;
  }
}

class List extends React.Component {
  render() {
    return <div>list视图</div>;
  }
}

class App extends React.Component {
  state = {
    router: window.location.hash.substr(1)
  };

  render() {
    console.log(this.state.router);
    let Child; //
    switch (this.state.router) {
      case "/home":
        Child = Home;
        break;
      case "/list":
        Child = List;
        break;
    }

    return (
      <div>
        <a href="#/home">首页</a>
        <a href="#/list">列表</a>
        <Child />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      console.log(123132);
      this.setState({ router: window.location.hash.substr(1) });
    });
  }
}
export default App;
