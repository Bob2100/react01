import React, { Component } from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <p>App 导航</p>
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
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/detail/:course" component={Detail}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>用户中心</h2>
      <div>
        <Link to="/about/me">个人信息</Link>｜
        <Link to="/about/order">订单</Link>
      </div>
      <Switch>
        <Route path="/about/me" component={() => (<div>我的信息</div>)}></Route>
        <Route path="/about/order" component={() => (<div>订单信息</div>)}></Route>
        <Redirect to="/about/me"></Redirect>
      </Switch>
    </div>
  );
}

function NoMatch() {
  return (
    <div>404</div>
  );
}

function Home({ location }) {
  return (
    <div>
      <p>Home Page</p>
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
      <p>Detail Page</p>
      {match.params.course}
      <button onClick={history.goBack}>后退</button>
      <button onClick={() => history.push({ pathname: '/', state: { foo: 'bar' } })}>回到首页</button>
    </div>
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
