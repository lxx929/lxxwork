import React, { Component } from "react";
import Head from "../component/head";
import axios from "axios";
import "../mock/index";
import { connect } from "react-redux";
class Detail extends Component {
  state = {
    item: {}
  };
  render() {
    let { item } = this.state;
    let { history } = this.props;
    return (
      <div>
        <Head back={true} title="詳情頁" />
        <img src={item.img} />
        <p>商品：{item.title}</p>
        <p>价格:{item.price}</p>
        <button
          onClick={() => {
            this.props.addshop(item);
            history.push("/shop");
          }}
        >
          加入购物车
        </button>
      </div>
    );
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get("/api/list").then(res => {
      console.log(res.data.list);
      let item = res.data.list.find(item => item.id == id);
      this.setState({ item });
    });
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      addshop(obj) {
        dispatch({ type: "ADD_SHOP", obj });
      }
    };
  }
)(Detail);
