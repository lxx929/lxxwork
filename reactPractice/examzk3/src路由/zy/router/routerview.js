import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function RouterViews(props) {
  let { routes } = props;
  let redirectArr =
    routes &&
    routes
      .filter(item => item.redirect)
      .map((item, index) => <Redirect from={item.path} to={item.redirect} />);
  return (
    <Switch>
      {routes &&
        routes
          .map(
            (item, index) =>
              !item.redirect && (
                <Route
                  path={item.path}
                  render={props => {
                    return <item.component {...props} child={item.children} />;
                  }}
                />
              )
          )
          .concat(redirectArr)}
    </Switch>
  );
}
export default RouterViews;
