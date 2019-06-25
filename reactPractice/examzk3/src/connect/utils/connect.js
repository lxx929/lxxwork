import React from "react";
import Context from "./context";
const connect = getstate => {
  return Com =>
    class newCom extends React.Component {
      render() {
        return (
          <Context.Consumer>
            {value => {
              // console.log(value);
              let obj = getstate(value);
              console.log(obj);
              return <Com {...obj} />;
            }}
          </Context.Consumer>
        );
      }
    };
};
export default connect;
