// import Home from '../views/home/index'
import Loadable from "react-loadable";
import React from "react";
function Loading() {
  return <div>loading</div>;
}

const Home = Loadable({
  loader: () => import("../views/home/index"),
  loading: Loading
});
const Manage = Loadable({
  loader: () => import("../views/manage/index"),
  loading: Loading
});
const Approval = Loadable({
  loader: () => import("../views/manage/approval"),
  loading: Loading
});

const Detailed = Loadable({
  loader: () => import("../views/manage/detailed"),
  loading: Loading
});

const Statistics = Loadable({
  loader: () => import("../views/manage/statistics"),
  loading: Loading
});

const Cardlist = Loadable({
  loader: () => import("../views/manage/cardlist"),
  loading: Loading
});

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/manage",
    component: Manage,
    children: [
      {
        path: "/manage/approval",
        component: Approval
      },
      {
        path: "/manage/detailed",
        component: Detailed,
        children: [
          {
            path: "/manage/detailed/statistics",
            component: Statistics
          },
          {
            path: "/manage/detailed/cardlist",
            component: Cardlist
          },
          {
            path: "/manage/detailed",
            redirect: "/manage/detailed/statistics"
          }
        ]
      },
      {
        path: "/manage",
        redirect: "/manage/approval"
      }
    ]
  },
  {
    path: "/",
    redirect: "/home"
  }
];

export default routes;
