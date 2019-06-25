import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Head extends Component {
  static defaultProps = {
    back: false,
    title: "电影"
  };

  static propTypes = {
    back: PropTypes.bool,
    title: PropTypes.string
  };
  render() {
    let { back, title } = this.props;

    return (
      <header>
        {back ? <span>&lt;</span> : null}
        <span>{title}</span>
      </header>
    );
  }
}
