import React, { Component } from 'react'

// 高阶组件
const withName = Comp => {

  // 改写组件的生命周期
  class NewComponent extends Component {
    componentDidMount() {
      console.log('do something');
    }
    render() {
      return (<Comp {...this.props} name="React"></Comp>)
    }
  }
  return NewComponent
}

const withLog = Comp => {
  console.log(Comp.name + '渲染了');
  return props => <Comp {...props}></Comp>
}

@withLog
@withName
@withLog
class Course extends Component {
  render() {
    return (
      <div>
        {this.props.stage} - {this.props.name}
      </div>
    )
  }

}

export default Course
