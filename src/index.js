import React from 'react';
import ReactDom from 'react-dom';
// import CartSample from './CartSample';
// import App from './App';
// import Lifecycle from "./Lifecycle";
// import CommentList from "./components/CommentList";
// import WelcomeDialog from './components/Composition'
import Hoc from './components/Hoc'

// ReactDom.render(<h1>React真酷</h1>, document.querySelector('#root'));
// ReactDom.render(<App />, document.querySelector('#root'));
// ReactDom.render(<Lifecycle />, document.querySelector('#root'));
// ReactDom.render(<CartSample title="购物车案例" />, document.querySelector('#root'));
// ReactDom.render(<CommentList />, document.querySelector('#root'));
// ReactDom.render(<WelcomeDialog />, document.querySelector('#root'));
ReactDom.render(<Hoc stage={'入门阶段'} />, document.querySelector('#root'));