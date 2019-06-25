import React, { Component } from "react";
import Head from "../component/head";
import Foot from "../component/footer";
export default class My extends Component {
  render() {
    return (
      <div>
        <Head back={true} title="我的" />
        我的
        <Foot />
      </div>
    );
  }
}
