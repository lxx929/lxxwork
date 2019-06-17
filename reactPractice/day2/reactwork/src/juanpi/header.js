import React from "react";

function Head(props) {
  return (
    <div>
      <h3>{props.header.title}</h3>
      <p>{props.header.price}</p>
    </div>
  );
}

export default Head;
