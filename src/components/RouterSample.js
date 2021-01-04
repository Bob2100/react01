import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/foo">foo</Link>
        </li>
      </ul>
      {/* 路由配置 */}
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  );
}

function Home() {
  return (
    <div>Home</div>
  );
}

function About() {
  return (
    <div>About</div>
  );
}

export default class RouterSample extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </div>
    )
  }
}
