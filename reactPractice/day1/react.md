虚拟dom： 用js对象来描述dom节点

通过diff算法，找出最小化差异，局部更新html

react react-dom

创建react元素 == 虚拟dom

react.createElement(string/function/reactClass,attrs,children)
jsx
,通过babel转义，然后隐式调用createElement()
jsx规则 遇见<标签名>开始解析html模板，遇见</标签>解析完成 遇见{开始解析js脚本，遇见}解析结束 每一个react元素必须要有一个根节点

ReactDOM.render(vNode,root) //把虚拟的dom转成真实的dom，并且渲染到页面里面

组件： 可复用的html结构

组件名的首字母要大写，跟html区分
无状态的组件 有状态的组件 createClass
无状态组件，就是一个普通的函数 （没有生明周期，没有state，有props）

使用构造函数创建，接受一个props，返回react元素

优点：解析速度快

function Head(){ return }

有状态组件(有生命周期，有state状态)

class 组件名 extends React.Component{ constructor(props){ super(props) this.state = { count:1 } } render(){ //return出来的结构就是将来组件要渲染的模板 return

} }
//修改状态 只能用setState()来修改，这个方法是一个异步的方法，第一个参数是要合并的对象，第二个就是回调