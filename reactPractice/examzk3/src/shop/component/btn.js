import React, { Component } from "react";
import { connect } from "react-redux";

class Btn extends Component {
  render() {
    let { count, id } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.props.changecount(count - 1, id);
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            this.props.changecount(count + 1, id);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      changecount(count, id) {
        dispatch({ type: "CHANGE_COUNT", count, id });
      }
    };
  }
)(Btn);
