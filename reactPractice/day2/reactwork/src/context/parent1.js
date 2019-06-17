import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
// console.log(context);//上下文  Consumer消费者   Provider提供

class Grad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Consumer>
          {value => {
            console.log(value);
            return (
              <span
                onClick={() => {
                  value.ck("10万");
                }}
              >
                孙子组件:{value.title}
              </span>
            );
          }}
        </Consumer>
        {/* 孙子组件:{this.props.title} */}
      </div>
    );
  }
}

class Son extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        儿子组件:
        <Grad />
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        爷爷组件：
        <Son />
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    title: "传家宝"
  };
  render() {
    let { title } = this.state;
    return (
      <div>
        <Provider
          value={{
            title,
            ck: name => {
              console.log(name);
              this.setState({ title: name });
            }
          }}
        >
          <Parent />
        </Provider>
      </div>
    );
  }
}
