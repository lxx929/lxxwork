import React, { Component } from "react";

//无状态组件
function List(props) {
  console.log(props);
  let { children } = props;
  return (
    <ul>
      {children.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default class Coll extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     group:[]
    // };
  }
  static defaultProps = {
    group: [
      {
        title: "导航一",
        isOpen: false,
        children: ["1-1", "1-2", "1-3"]
      }
    ]
  };
  render() {
    let { group } = this.props;
    console.log(this.props);
    return (
      <div className="coll">
        {group &&
          group.map((item, index) => {
            return (
              <div key={index}>
                <h3
                  onClick={this.handleOpen.bind(this, index)}
                  className={item.isOpen ? "active" : ""}
                >
                  {item.title}
                </h3>
                {item.isOpen && item.children ? (
                  <List children={item.children} />
                ) : null}
              </div>
            );
          })}
      </div>
    );
  }
  handleOpen(ind) {
    this.props.open(ind);
    console.log("handleOpen");
  }
  componentDidMount() {}
}
// Coll.defaultProps = {};
