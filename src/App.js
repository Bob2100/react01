import React, { Component } from 'react'
import icon from './icon.jpg'
import './App.css'
import { Button } from 'antd'

// 函数型组件传递props
function Welcome(props) {
  return (
    <div>
      <p>Hel lo, {props.name}</p>
    </div>
  )
}


export default class App extends Component {
  // 当需要状态时需要构造函数
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      count: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.timer = this.setState({
        date: new Date()
      });

      //不能直接修改
      // this.state.date = new Date();

    }, 1000);

    // 这是异步的
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count);//1
    });
    console.log(this.state.count);//0
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  formatName(user) {
    return `${user.firstName} ${user.lastName}`;
  }

  render() {

    const name = 'Bob';

    // jsx也是表达式
    const jsx = <h1>Hello JSX</h1>;

    return (
      <div>
        App组件
        {/* 表达式 */}
        <p>{name}</p>
        <p>{this.formatName({ firstName: 'Bob', lastName: 'Wu' })}</p>

        {/* 属性 */}
        <img alt="" src={icon} style={{ width: 100 }} className="img"></img>
        {jsx}
        <Welcome name="welcome"></Welcome>

        {/* 使用状态 */}
        <p>{this.state.date.toLocaleTimeString()}</p>
        <Button type="primary">点击</Button>
      </div>
    )
  }
}
