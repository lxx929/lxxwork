import React, { Component } from "react";

import connect from "./uitls/connect";

class Children extends Component {
  render() {
    console.log(this.props, "props");
    return <div>children</div>;
  }
}
// console.log(connect((state)=> {
//     console.log(state,'children');
// }));

// func aa(){

// }
// aa()
export default connect(state => {
  console.log(state, 9090);
  return {
    num: state.num
  };
})(Children);
// export default connect(()=>{})
