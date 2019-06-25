import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
class Head extends Component {
  static defaultProps = {
    back: false,
    title: "首页"
  };
  static propTypes = {
    back: PropTypes.bool,
    title: PropTypes.string
  };
  render() {
    let { back, title, history } = this.props;
    return (
      <header>
        {back ? (
          <span
            onClick={() => {
              history.go(-1);
            }}
          >
            &lt;
          </span>
        ) : null}
        <span>{title}</span>
      </header>
    );
  }
}

export default withRouter(Head);
