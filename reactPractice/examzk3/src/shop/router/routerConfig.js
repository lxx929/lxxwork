import React from "react";
import Loadable from "react-loadable";

const Loading = () => {
  return (
    <div>
      <img src={require("../img/loading.jpg")} />
    </div>
  );
};

// import Home from '../views/home'
// import Shop from '../views/shop'
// import My from '../views/my'
// import Detail from '../views/detail'
const Home = Loadable({
  loader: () => import("../views/home"),
  loading: Loading
});

const Shop = Loadable({
  loader: () => import("../views/shop"),
  loading: Loading
});

const My = Loadable({
  loader: () => import("../views/my"),
  loading: Loading
});

const Detail = Loadable({
  loader: () => import("../views/detail"),
  loading: Loading
});
const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/",
    redirect: "/home"
  }
];

export default routes;
