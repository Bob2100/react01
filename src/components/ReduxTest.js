import React, { Component } from 'react'
import { connect } from "react-redux";

const mapStateToProps = state => ({ num: state })
const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: 'add' }),
  minus: () => dispatch({ type: 'minus' })
})

@connect(mapStateToProps, mapDispatchToProps)
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


