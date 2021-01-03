import React, { Component } from 'react'
import { connect } from "react-redux";

@connect(
  state => ({ num: state }),
  {
    add: () => ({ type: 'add' }),
    minus: () => ({ type: 'minus' })
  }
)
class ReduxTest extends Component {
  render() {
    return (
      <div>
        <p>
          <button onClick={() => this.props.minus()}>-</button>
          {this.props.num}
          <button onClick={() => this.props.add()}>+</button>
        </p>
      </div>
    )
  }
}

export default ReduxTest


