import React, { Component } from "react";
import Foot from "../components/foot";
import list from "../mock/index";
import Axios from "axios";
import Item from "../components/item";

export default class Home extends Component {
  state = {
    list: [],
    ind:0
  };
  render() {
    let { list,ind } = this.state;

    return (
      <div className="wrap">
        <header>
          <h3>校园超市</h3>
        </header>
        <p>最新商品：</p>
        <section>
          <ul>
            {list &&
              list.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={this.click.bind(this, index)}
                    className={ind == index ? "active" : ""}
                  >
                    {item.title}
                  </li>
                );
              })}
          </ul>
          <div className="cont">
            {list[ind] && list[ind].content.map((item,index)=>
              <Item key={index} item={item} />
            )}
          </div>
        </section>
        <Foot />
      </div>
    );
  }

  componentDidMount() {
    Axios.get("/api/getDatas").then(({ data }) => {
      console.log(data);
      this.setState({
        list: data.list
      });
      // console.log(this.state);
    });
  }
  click(index){
    console.log(index,'oo');
    let {ind}=this.state;
    this.setState({
      ind:index
    })
  }
}
