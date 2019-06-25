import React from "react";
// import Home from '../views/home'
import { BrowserRouter} from "react-router-dom";
import RouterView from "./routerview";
import routes from "./routerConfig";
function RootRouter() {
  return (
    <BrowserRouter>
      <RouterView routes={routes} />
    </BrowserRouter>
  );
}

export default RootRouter;
