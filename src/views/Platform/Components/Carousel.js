import React from "react";

const Carousel = props => (
  <div className="container carousel">
    <h4>
      {props.title} {props.subtitle && <span>· {props.subtitle}</span>}
    </h4>
    <div className="columns">
      <div className="column is-3">
        <div className="is-content">
          <img src="/static/backtogym.jpg" alt="" />
        </div>
      </div>
      <div className="column is-3">
        <div className="is-content"></div>
      </div>
      <div className="column is-3">
        <div className="is-content"></div>
      </div>
      <div className="column is-3">
        <div className="is-content"></div>
      </div>
    </div>
  </div>
);

export default Carousel;
