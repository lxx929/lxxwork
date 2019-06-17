import React, { Component } from "react";

export default class Dialog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let { obj } = this.props;
    return (
      <div className="dialog">
        <div className="content">
          <p>{obj.title}</p>
          <div>{obj.content ? obj.content : <input />}</div>
          <div className="footer">
            {obj.type !== "prompt" ? <div>取消</div> : ""}
            <div
              onClick={() => {
                this.props.close();
              }}
            >
              确定
            </div>
          </div>
        </div>
      </div>
    );
  }
}
