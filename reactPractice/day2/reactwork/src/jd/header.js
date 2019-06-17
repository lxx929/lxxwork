import React from "react";

function Head(props) {
  console.log(props.header);
  let { title, img, content } = props.header;
  return (
    <header>
      <h3>{title}</h3>
      <div>
        <dl>
          <dt>
            <img src={img} />
          </dt>
          <dd>{content}</dd>
        </dl>
      </div>
    </header>
  );
}

// class Head extends React.Component{
//     constructor(props){
//         super(props)
//     }

// }

export default Head;
