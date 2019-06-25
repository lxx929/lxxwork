react-router-dom { BrowserRouter,Route}

BrowserRouter是一个根组件，所有的组件都要包裹在这个组件

Route //路由跳转

//所有通过 Route来调用的组件都叫视图组件，在调用视图组件的时候会传递参数 history location match //path来匹配路径 component={组件名} 或者 // path render={(props)=>{ return
}}
exact //精准匹配 解决的是重复渲染的问题 / /list, 问题：如果有二级路由的话就会出问题,二级路由进不去，（一级路由上边加了精准匹配的情况）

switch 只会渲染匹配的视图(一条) 比较的大的路由放在后边（或者用exact）

Redirect 路由重定向 from to //写在switch里面的最后，如果不放在最后，会造成内存溢出（5.0.0警告，5.0.1没有警告）
7.Link 必须要有to属性 解析出来是a标签，不会渲染整个页面 8. NavLink 多了个类名 修稿类名activeClassName="""

一级

// movie // cinema // my // city // search //detail //login

二级 // hot // release

路由跳转 history.push('') history.push({ pathname:'/city' });

history.replace('');

pathname: path + search

http://localhost:3000/movie/hot?id=12

/movie/hot?id=12

withRouter() 方法 接受一个组件类，返回一个新的组件，在这个新的组件里面就能获取到history、localtion、match