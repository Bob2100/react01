import React, { Component } from 'react'

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    console.log('1. constructor');

    this.state = {
      count: props.count
    }
  }

  componentWillMount() {
    // 可以访问属性和状态，可以进行Api调用，不能做dom操作
    console.log('2. componentWillMount');
  }

  componentDidMount() {
    // 组件已经挂载，可以更新状态
    console.log('3. componentDidMount');
  }

  componentWillReceiveProps() {
    // 父组件传递的属性有变化
    console.log('4. componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    // 组件是否需要更新，返回布尔值
    console.log('5. shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    // 组件将要更新
    console.log('6. componentWillUpdate');
  }

  componentDidUpdate() {
    // 组件已经更新
    console.log('7. componentDidUpdate');
  }

  render() {

    console.log('render');

    return (
      <div>
        <h1>组件声明周期探究</h1>
      </div>
    )
  }
}


export default class Defau extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    setTimeout(() => {
      this.setState({
        count: 1
      });
    }, 5000);
  }
  render() {
    return <Lifecycle prop={this.state.count} />
  }
}

