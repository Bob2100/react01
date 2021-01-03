import React, { Component } from 'react'
import { connect } from "react-redux";
import { add, minus, asyncAdd } from "../store/counter.redux";

@connect(
  state => ({ num: state }),
  {
    add,
    minus,
    asyncAdd
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
          <button onClick={() => this.props.asyncAdd()}>asyncAdd</button>
        </p>
      </div>
    )
  }
}

export default ReduxTest


