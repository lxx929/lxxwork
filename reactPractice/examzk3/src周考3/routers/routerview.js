import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class Routerview extends Component {
  render() {
    let { routes } = this.props;
    console.log(routes);
    let routerArr = routes && routes.filter(item => !item.redirect);
    let redirectArr =
      routes &&
      routes
        .filter(item => item.redirect)
        .map((item, index) => {
          return <Redirect key={index} from={item.path} to={item.redirect} />;
        });
    return (
      <Switch>
        {routerArr &&
          routerArr
            .map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  render={props => {
                    return <item.component {...props} />;
                  }}
                />
              );
            })
            .concat(redirectArr)}
      </Switch>
    );
  }
}

export default Routerview;
