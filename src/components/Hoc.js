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
  return props => <Course {...props} name="React"></Course>
}


export default withName(Course)
