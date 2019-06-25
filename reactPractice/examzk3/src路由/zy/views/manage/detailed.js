import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
// import Statistics from './statistics'
// import Cardlist from './cardlist'
import RouterViews from "../../router/routerview";
export default class Detailed extends Component {
  render() {
    let { child } = this.props;
    return (
      <div>
        <NavLink to="/manage/detailed/statistics">考勤明细统计</NavLink>
        <NavLink to="/manage/detailed/cardlist">明细清单</NavLink>

        <RouterViews routes={child} />
        {/* <Switch>
                    <Route path="/manage/detailed/statistics" component={Statistics} />
                    <Route path="/manage/detailed/cardlist" component={Cardlist} />
                    <Redirect from="/manage/detailed" to="/manage/detailed/statistics"/>
                </Switch> */}
      </div>
    );
  }
}
