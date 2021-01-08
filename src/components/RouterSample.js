import React, { Component } from 'react'
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import store from '../store';
import { login } from '../store/user.redux'

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
        <PrivateRoute path="/about" component={About}></PrivateRoute>
        <Route path="/detail/:course" component={Detail}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  );
}

@connect(
  state => ({
    isLogin: state.user.isLogin
  }),
  { login }
)
class Login extends Component {

  render() {
    const from = this.props.location.state.from || '/';
    if (this.props.isLogin) {
      return <Redirect to={from} />
    }
    return (
      <div>
        <p>请登录</p>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
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

@connect(
  state => ({
    isLogin: state.user.isLogin
  })
)
class PrivateRoute extends Component {
  render() {
    const { component: Comp, ...rest } = this.props;
    return (
      <Route {...rest} render={
        props => this.props.isLogin ? <Comp {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
      }></Route>
    );
  }
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
          <Provider store={store}>
            <App></App>
          </Provider>
        </BrowserRouter>
      </div>
    )
  }
}
