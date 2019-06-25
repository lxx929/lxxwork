import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../views/home";
import List from "../views/list";

// history --->  BrowserRouter
// hash ----->  HashRouter
// Route  --- 航线,通过Route直接来调用的组件，才能拿到history\location\match
// Redirect 重定向

// BrowserRouter  HashRouter  Route Swicth   Redirect  Link NavLink

function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/list" component={List} />
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default RootRouter;
