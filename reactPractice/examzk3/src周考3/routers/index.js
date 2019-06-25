import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import routes from "./routerconfig";
import Routerview from "./routerview";

class Routers extends Component {
  render() {
    return (
      <Router>
        <Routerview routes={routes} />
      </Router>
    );
  }
}

export default Routers;
