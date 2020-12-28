import React, { Component } from 'react'

// 创建上下文
const Context = React.createContext();
const store = {
  name: 'React Course',
  sayName() {
    console.log(this.name);
  }
}

export default class ContextSample extends Component {
  render() {
    return (
      <Context.Provider value={store}>
        <div>
          {/* 获取数据 */}
          <Context.Consumer>
            {/* 必须内嵌一个函数 */}
            {val => (<button onClick={() => val.sayName()}>{val.name}</button>)}
          </Context.Consumer>
        </div>
      </Context.Provider>
    )
  }
}
