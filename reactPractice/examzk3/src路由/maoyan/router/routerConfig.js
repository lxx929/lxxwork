// import Movie from "../views/movie";
// // import Cinema from "../views/cinema";
// import my from "../views/my";
// import City from "../views/city";
// import Search from "../views/search";
// import Detail from "../views/detail";
// import Hot from '../views/hot'
// import Release from '../views/release'
// import Login from "../views/login";

import Loadable from "react-loadable";

import React, { Component } from "react";
//import指令加载的是静态加载，打包的时候运行的，import()动态加载的，编译的时候运行
// const Home = ()=> import()

// console.log(import('../views/movie'));
// import('../views/movie').then((res)=>{
//     console.log(res.default);
// })
// func (){
//     // import('../views/cinema').then((res)=>{
// //     console.log(res.default);
// // })
// }

// function aa(){
//     new Promise((resolve)=>{
//         console.log(32321);
//     })
// }

const LoadAsync = obj => {
  console.log(obj);
  return class extends Component {
    state = {
      Com: obj.loading
    };
    render() {
      let { Com } = this.state;
      console.log(this.props);
      return <Com {...this.props} />;
    }
    componentDidMount() {
      obj.load().then(res => {
        this.setState({ Com: res.default });
      });
    }
  };
};

const Loading = () => {
  return <div>loading....</div>;
};

const Movie = Loadable({
  loader: () => import("../views/movie"),
  loading: Loading
});
const Cinema = Loadable({
  loader: () => import("../views/cinema"),
  loading: Loading
});
const My = Loadable({
  loader: () => import("../views/my"),
  loading: Loading
});

const City = Loadable({
  loader: () => import("../views/city"),
  loading: Loading
});

const routes = [
  {
    path: "/",
    redirect: "/movie"
  },
  {
    path: "/movie",
    component: Movie
  },
  {
    path: "/cinema",
    component: Cinema
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/city",
    component: City
  }
];

export default routes;
