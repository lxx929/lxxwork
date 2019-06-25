import React, { Component } from "react";
import store from "../store/index";
class Input extends Component {
  state = {
    val: ""
  };
  render() {
    let { val } = this.state;
    return (
      <div>
        <input
          value={val}
          onChange={e => {
            this.setState({ val: e.target.value });
          }}
          onKeyUp={this.keyup.bind(this)}
        />
      </div>
    );
  }

  keyup(e) {
    if (e.keyCode == 13) {
      store.dispatch({ type: "ADD_Msg", val: this.state.val });
      // console.log(this.state.val);
    }
  }
}

class List extends Component {
  constructor() {
    super();
    store.subscribe(() => {
      this.setState({});
    });
  }
  render() {
    // console.log(store.getState().list);
    let { list } = store.getState();
    return (
      <ul>
        {list &&
          list.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                store.dispatch({ type: "DEL_Msg", index });
              }}
            >
              {item}
            </li>
          ))}
      </ul>
    );
  }
}

export default class Message extends Component {
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    );
  }
}
