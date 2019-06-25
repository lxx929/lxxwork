import React, { Component } from 'react'
import Foot from "../components/foot";
export default class My extends Component {
    render() {
        return (
          <div className="my">
           
            <header>
              <h3>个人中心</h3>
            </header>
            <section>我的</section>
            <Foot />
          </div>
        );
    }
}
