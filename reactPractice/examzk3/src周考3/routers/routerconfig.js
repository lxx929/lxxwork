import React, { Component } from "react";
import Loadable from "react-loadable"; //按需加载

function Loading() {
  return <div>loading...</div>;
}

const Home = Loadable({//首页
  loader: () => import("../views/home"),
  loading: Loading
});

const Kind = Loadable({//分类
  loader: () => import("../views/kind"),
  loading: Loading
});

const Shop = Loadable({//购物车
  loader: () => import("../views/shop"),
  loading: Loading
});

const My = Loadable({//我的
  loader: () => import("../views/my"),
  loading: Loading
});

const Detail = Loadable({//详情
  loader: () => import("../views/detail"),
  loading: Loading
});

let routes = [//路由表
  {
    path: "/home",
    component: Home
  },
  {
    path: "/kind",
    component: Kind
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
    path: "/detail",
    component: Detail
  },
  {
    path: "/",
    redirect: "/home"
  }
];

export default routes;
