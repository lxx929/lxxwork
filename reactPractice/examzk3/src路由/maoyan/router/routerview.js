import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
function RouterView(props) {
  let { routes } = props; // children
  //取得是所有没有重定向的数据
  let routerArr = routes && routes.filter(item => !item.redirect);
  //找的是所有包含重定向
  let redirectArr =
    routes &&
    routes
      .filter(item => item.redirect)
      .map((item, index) => (
        <Redirect key={index} from={item.path} to={item.redirect} />
      ));
  console.log(redirectArr);
  return (
    <Switch>
      {routerArr &&
        routerArr
          .map((item, index) => (
            <Route
              key={index}
              path={item.path}
              render={props => {
                return <item.component {...props} child={item.children} />;
              }}
            />
          ))
          .concat(redirectArr) // [<Route />,<Route />,<Redirect />]
      }
    </Switch>
  );
}

export default RouterView;
