import React, { Component } from "react";
// import store from '../store/index'

import { connect } from "react-redux";

class Count extends Component {
  constructor() {
    super();
    // this.setState({})
    // store.subscribe(()=>{
    //     this.setState({})
    // });
  }
  render() {
    console.log(this.props);
    // let {count} = store.getState();
    let { count } = this.props;
    return (
      <div>
        <button onClick={this.handladd.bind(this, false)}>-</button>
        <span>{count}</span>
        <button onClick={this.handladd.bind(this, true)}>+</button>
      </div>
    );
  }
  handladd(flag) {
    let type = flag ? "ADD" : "DEL";
    // store.dispatch({type})
    // this.props.dispatch({type})
    this.props.changecount(type);
  }
}
// console.log(connect);

const mapStateToProps = state => {
  // console.log(state);
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    changecount(type) {
      dispatch({ type });
    }
  };
};

console.log(connect(mapStateToProps)(Count));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Count);
