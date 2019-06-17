ref

普通的元素上边 ref
string ref ='box' 获取：this.refs.box // this.refs是一个对象 this.refs.对象里面的key, 获取到的是这个key对于的value

function
ref={(dom)=>{ console.log(dom); }} //render就会调用,函数里面的参数，就是要获取的dom节点 更改状态的时候，回调函数会触发两次，第一次的dom是null，第二次才是真实的dom

组件上边

this.refs.名字 获取的是组件实例

findDOMNode(组件实例) //获取的是组件的整个dom

unmountComponentAtNode(根节点)

DOM0 onclick 只能添加一次 没有兼容问题

DOM2

addEventListener() 能添加多次，有兼容问题 IE

//第一个参数是事件类型， 第二个参数事件处理函数， 第三个参数 true是捕获，false是冒泡，默认是false

react事件

onClick 驼峰格式

this

onClick={()=>{}}

handleClick=()=>{

console.log(this);
alert('green');
}

onClick={this.handleClick.bind(this,'green')}

// 改变this指向

改变this指向后会立马触发函数 call // 传递参数的时候一个一个传递 apply //可以传递一个数组

bind //改变this指向后，不会立马调用函数

react合成事件默认也是冒泡，所有的合成事件都加给了doucment,底层也有自己的冒泡机制。在底层兼容问题也解决了。

捕获事件 onClickCapture
//原生事件和合成事件同时出现的时候先执行原生事件。（需要看点击的元素） 原生事件和合成事件混合用的时候需要注意的是：

原生事件里面如果阻止事件冒泡，有可能合成事件就都不执行了（要慎用原生事件里面事件冒泡）
组件卸载的时候 清空事件、定时器。。。。