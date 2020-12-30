import React, { Component } from 'react'
import store from '../store'

export default class ReduxTest extends Component {
  render() {
    return (
      <div>
        <p>
          <button onClick={() => store.dispatch({ type: 'minus' })}>-</button>
          {store.getState()}
          <button onClick={() => store.dispatch({ type: 'add' })}>+</button>
        </p>
      </div>
    )
  }
}
