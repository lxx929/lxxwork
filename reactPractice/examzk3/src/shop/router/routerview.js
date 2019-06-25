import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class RouterView extends React.Component {
  render() {
    let { routes } = this.props;
    let routeArr = routes && routes.filter(item => !item.redirect);
    let redirectArr =
      routes &&
      routes
        .filter(item => item.redirect)
        .map((item, index) => (
          <Redirect key={index} from={item.path} to={item.redirect} />
        ));
    return (
      <Switch>
        {console.log(routeArr)}
        {console.log(redirectArr)}
        {routeArr &&
          routeArr
            .map((item, index) => (
              <Route
                key={index}
                path={item.path}
                render={props => {
                  return <item.component {...props} child={item.children} />;
                }}
              />
            ))
            .concat(redirectArr)}
      </Switch>
    );
  }
}

export default RouterView;
