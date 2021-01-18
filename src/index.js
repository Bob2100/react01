import React from 'react';
import ReactDom from 'react-dom';

function Comp(props) {
  return <h2>Hi,{props.name}</h2>
}

const jsx = (
  <div id="demo">
    <span>Hi</span>
    <Comp name="kaikeba"></Comp>
  </div>
);
console.log(jsx);

ReactDom.render(jsx, document.querySelector('#root'));