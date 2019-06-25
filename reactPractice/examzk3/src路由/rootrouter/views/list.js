import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";

import Movie from "./movie";
import Cinema from "./cinema";

export default class List extends Component {
  render() {
    return (
      <div>
        {/* <Link to="/list/movie">电影</Link>
                <Link to="/list/cinema">影院</Link> */}
        <NavLink to="/list/movie" activeClassName="aa">
          电影
        </NavLink>
        <NavLink to="/list/cinema">影院</NavLink>

        <Route
          path="/list/movie"
          render={props => {
            console.log(this.props);
            return <div>电影</div>;
          }}
        />
        <Route path="/list/cinema" component={Cinema} />
      </div>
    );
  }
}
