import React, { Component } from 'react'

function Course(props) {
  return (
    <div>
      {props.stage} - {props.name}
    </div>
  )
}

// 高阶组件
const withName = Comp => {

  // 改写组件的生命周期
  class NewComponent extends Component {
    componentDidMount() {
      console.log('do something');
    }
    render() {
      return <Course {...this.props} name="React"></Course>
    }
  }
  return NewComponent
}


export default withName(Course)
