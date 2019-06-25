import React, { Component } from "react";
import Head from "../component/head";
import Foot from "../component/footer";
import axios from "axios";
import "../mock/index";
import Item from "../component/item";
export default class Home extends Component {
  state = {
    list: []
  };
  render() {
    let { list } = this.state;
    return (
      <div className="home">
        <Head back={false} title="首页" />
        <section>
          {list && list.map((item, index) => <Item key={index} item={item} />)}
        </section>
        <Foot />
      </div>
    );
  }
  componentDidMount() {
    axios.get("/api/list").then(({ data: { list } }) => {
      console.log(list);
      this.setState({ list });
    });
  }
}
