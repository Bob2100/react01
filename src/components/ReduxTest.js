import React, { Component } from 'react'
import { connect } from "react-redux";

@connect(
  state => ({ num: state }),
  {
    add: () => ({ type: 'add' }),
    minus: () => ({ type: 'minus' }),
    asyncAdd: () => dispatch => {
      // 模拟异步操作
      setTimeout(function () {
        dispatch({
          type: 'add'
        });
      }, 1000);
    }
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


