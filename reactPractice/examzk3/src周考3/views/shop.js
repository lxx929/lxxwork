import React, { Component } from 'react';
import Foot from "../components/foot";
export default class Shop extends Component {
    render() {
        return (
          <div className="shopcar">
            <header>
              <h3>购物车</h3>
            </header>
            <section>购物车</section>
            <Foot />
          </div>
        );
    }
}
