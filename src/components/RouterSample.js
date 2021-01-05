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
      <Route path="/detail/:course" component={Detail}></Route>
    </div>
  );
}

function Home({ location }) {
  console.log(location.state);
  return (
    <div>
      <ul>
        <li><Link to="/detail/web">Web</Link></li>
        <li><Link to="/detail/java">Java</Link></li>
        <li><Link to="/detail/python">python</Link></li>
      </ul>
    </div>
  );
}

function Detail({ match, history, location }) {
  return (
    <div>
      {match.params.course}
      <button onClick={history.goBack}>后退</button>
      <button onClick={() => history.push({ pathname: '/', state: { foo: 'bar' } })}>回到首页</button>
    </div>
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
