import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import RouterView from "../router/routerview";
export default class Release extends Component {
  render() {
    console.log(this.props);
    let { child } = this.props;
    return (
      <div>
        <h3>即将上映</h3>
        <NavLink to="/movie/release/aa">列表一</NavLink>
        <NavLink to="/movie/release/bb">列表二</NavLink>

        <RouterView routes={child} />

        {/* <Switch>
                    <Route path="/movie/release/aa" render={()=>{
                        return <div>列表一的内容</div>
                    }}/>
                    <Route path="/movie/release/bb" render={()=>{
                        return <div>列表二的内容</div>
                    }}/>
                    <Redirect from="/movie/release/" to="/movie/release/aa"/>
                </Switch> */}
      </div>
    );
  }
}
