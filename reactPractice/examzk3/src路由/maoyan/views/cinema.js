import React, { Component } from "react";

import Head from "../components/head";
import Foot from "../components/foot";

export default class Cinema extends Component {
  render() {
    return (
      <div>
        <Head back={false} title="影院" />
        <section>影院</section>
        <Foot />
      </div>
    );
  }
}
