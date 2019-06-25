import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";

import Home from "../views/home/index";
import Manage from "../views/manage/index";

import routes from "./routeConfig";
import RouterViews from "./routerview";
function RootRouter() {
  // let routesArr =
  let redirectArr = routes
    .filter(item => item.redirect)
    .map((item, index) => <Redirect from={item.path} to={item.redirect} />);
  return (
    <BrowserRouter>
      <RouterViews routes={routes} />
    </BrowserRouter>
  );
}

export default RootRouter;
