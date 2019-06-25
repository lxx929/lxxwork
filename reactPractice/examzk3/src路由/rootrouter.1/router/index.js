import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

// console.log(BrowserRouter);

import Home from "../views/home";
import List from "../views/list";

function RootRouter() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/list" component={List} exact />
    </Router>
  );
}

export default RootRouter;
