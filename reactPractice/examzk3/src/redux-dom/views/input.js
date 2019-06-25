import React, { Component } from "react";
// import store from '../store/index'
import { connect } from "react-redux";

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
      console.log(this.props);
      // store.dispatch({type:'ADD_Msg',val:this.state.val})
      // console.log(this.state.val);
      let val = this.state.val;
      this.props.add(val);
    }
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      add(val) {
        dispatch({ type: "ADD_Msg", val });
      }
    };
  }
)(Input);
