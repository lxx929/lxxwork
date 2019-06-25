import React, { Component } from "react";
// import store from '../store/index'
import { connect } from "react-redux";

class List extends Component {
  constructor() {
    super();
    // store.subscribe(()=>{
    //     this.setState({})
    // })
  }
  render() {
    // console.log(store.getState().list);
    // let {list} = store.getState();
    console.log("render", this.props);
    let { list } = this.props;
    return (
      <ul>
        {list &&
          list.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                //    store.dispatch({type:'DEL_Msg',index})
                this.props.del(index);
              }}
            >
              {item}
            </li>
          ))}
      </ul>
    );
  }
}

export default connect(
  state => {
    return {
      list: state.list
    };
  },
  dispatch => {
    return {
      del(index) {
        dispatch({ type: "DEL_Msg", index });
      }
    };
  }
)(List);
