import React, { Component } from './kreact';
import ReactDom from './kreact-dom';

function Comp(props) {
  return <h2>function组件Hi,{props.name}</h2>
}

class Comp2 extends Component {
  render() {
    return <h2>class组件</h2>
  }
}

const jsx = (
  <div id="demo">
    <span>Hi</span>
    <Comp name="kaikeba"></Comp>
    <Comp2 name="class组件"></Comp2>
  </div>
);

ReactDom.render(jsx, document.querySelector('#root'));