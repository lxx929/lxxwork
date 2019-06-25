import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import Movie from '../views/movie'
// import Cinema from '../views/cinema'
// import My from '../views/my'
// import City from '../views/city'
// import Search from '../views/search'
import routes from "./routerConfig";
import RouterView from "./routerview";
console.log(routes);
function RootRouter() {
  // [<Redirect from  to/>,<Redirect form  to/>]
  return (
    <Router>
      <RouterView routes={routes} />
    </Router>
  );
}

export default RootRouter;
