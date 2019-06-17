import React, { Component } from "react";

export default class Sw extends Component {
  render() {
    return (
      <div className="swiper-container" style={{ width: 300, height: 300 }}>
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ background: "red" }}>
            Slide 1
          </div>
          <div className="swiper-slide" style={{ background: "pink" }}>
            Slide 2
          </div>
          <div className="swiper-slide" style={{ background: "blue" }}>
            Slide 3
          </div>
        </div>
      </div>
    );
  }
}
