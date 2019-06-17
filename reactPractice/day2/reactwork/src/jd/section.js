import React, { Component } from "react";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ind: 0
    };
  }
  render() {
    let { center } = this.props;
    let { ind } = this.state;
    console.log(center);
    return (
      <div>
        <ul>
          {center.map((item, index) => (
            <li
              onClick={() => {
                this.setState({
                  ind: index
                });
              }}
              className={index == ind ? "active" : ""}
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <div>
          <dl>
            <dt>
              <img src={center[ind].img} />
            </dt>
            <dd>
              <h3>{center[ind].con}</h3>
              {center[ind].link.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}
