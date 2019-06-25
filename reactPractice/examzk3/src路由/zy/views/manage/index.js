import React, { Component } from "react";
import Head from "../../component/head";
import { Route, Switch, Redirect } from "react-router-dom";
import RouterViews from "../../router/routerview";
// import Approval from './approval'
// import Detailed from './detailed'
export default class Manage extends Component {
  render() {
    let { child } = this.props;
    return (
      <div>
        <Head />
        <ul>
          <li onClick={this.handleapp.bind(this)}>考勤审批</li>
          <li onClick={this.handledel.bind(this)}>考勤明细</li>
        </ul>
        <RouterViews routes={child} />
        {/* <Switch>
                    <Route path="/manage/approval" component={Approval}/>
                    <Route path="/manage/detailed" component={Detailed}/>
                    <Redirect from="/manage" to="/manage/approval"></Redirect>
                </Switch> */}
      </div>
    );
  }
  handleapp() {
    let { history } = this.props;
    history.push("/manage/approval");
  }
  handledel() {
    let { history } = this.props;
    history.push("/manage/detailed");
  }
}
