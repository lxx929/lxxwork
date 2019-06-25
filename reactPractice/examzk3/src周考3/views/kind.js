import React, { Component } from 'react'
import Foot from "../components/foot";
export default class Kind extends Component {
    render() {
        return (
          <div className="kind">
            <header>
              <h3>分类商品</h3>
            </header>
            <section>
              分类
            </section>
            <Foot />
          </div>
        );
    }
}
