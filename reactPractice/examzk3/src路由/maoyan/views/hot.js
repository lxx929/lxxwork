import React, { Component } from "react";
import axios from "axios";
import "../mock/index";
import Item from "../components/item";
export default class Hot extends Component {
  state = {
    movieList: []
  };
  render() {
    let { movieList } = this.state;
    return (
      <div>
        {movieList &&
          movieList.map((item, index) => <Item key={index} item={item} />)}
      </div>
    );
  }
  componentDidMount() {
    axios.get("/api/hot").then(({ data: { hot: { movieList } } }) => {
      // console.log(movieList);
      this.setState({ movieList });
    });
  }
}
