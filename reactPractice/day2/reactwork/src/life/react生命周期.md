#生命周期# ##旧的生命周期##

出生阶段
constructor 初始化函数，接受props，设置组件的默认状态（state） 1次
componentWillMount 组件将要被渲染的时候 1次
render 组件正在被渲染的时候触发的，进行diff算法，产生最小化差异，局部更新dom 多次
componentDidMount 组件渲染结束 1次
成长阶段
state发生变化的时候

shouldComponentUpdate 是否要更新组件？返回的是true，或者false。true是要更新，false不更新，接受两个参数，第一个参数是最新的props，第二个是最新的state
componentWillUpdate 组件更新之前，接受两个参数，第一个参数是最新的props，第二个是最新的state
render 组件正在被更新时候触发的，进行diff算法，产生最小化差异，局部更新dom 多次
componentDidUpdate 组件更新结束
props 发生变化的时候

componentWillReceiveProps 接受的是最新的props，和上一次的是state
shouldComponentUpdate 是否要更新组件？返回的是true，或者false。true是要更新，false不更新，接受两个参数，第一个参数是最新的props，第二个是最新的state
componentWillUpdate 组件更新之前，接受两个参数，第一个参数是最新的props，第二个是最新的state
render 组件正在被更新时候触发的，进行diff算法，产生最小化差异，局部更新dom 多次
componentDidUpdate 组件更新结束
卸载阶段(死亡)
componentWillUnmount



##新生命周期## 新旧两个生命周期不能一起使用

es6 定义静态方法，用static关键字，静态方法里面没有this

static getDerivedStateFromProps 必须要return,一个对象或者一个null ,如果返回的是一个对象的话，会通过setState更新组件,如果返回的是null，不会更新。
getSnapshotBeforeUpdate
出生阶段
constructor
getDerivedStateFromProps //组件将要被渲染
render
componentDidMount
成长阶段
static getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate //返回一个null或者一个对象，返回值作为componentDidUpdate的第三个参数存在,需要配合着componentDidUpdate一起使用
componentDidUpdate(prevProps, prevState,value)
卸载阶段
componentWillUnmount