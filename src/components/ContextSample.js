import React, { Component } from 'react'

// 创建上下文
const Context = React.createContext();
const store = {
  name: 'React Course',
  sayName() {
    console.log(this.name);
  }
}

const withProvider = Comp => (
  props => (
    <Context.Provider value={store}>
      <Comp {...props}></Comp>
    </Context.Provider>
  )
)

const withConsumer = Comp => (
  props => (
    <Context.Consumer>
      {/* 必须内嵌一个函数 */}
      {val => (<Comp {...props} onClick={() => val.sayName()} value={val.name}></Comp>)}
    </Context.Consumer>
  )
)

@withConsumer
class Inner extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

@withProvider
class ContextSample extends Component {
  render() {
    return (
      <div><Inner></Inner></div>
    )
  }
}

export default ContextSample
