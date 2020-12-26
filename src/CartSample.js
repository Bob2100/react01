import React, { Component } from 'react'

export default class CartSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: [
        { id: 1, text: 'Web前端1', price: 888 },
        { id: 2, text: 'Web前端2', price: 888 },
        { id: 3, text: 'Web前端3', price: 888 }
      ]
    }
  }
  render() {
    return (
      <div>
        {/* 条件语句 */}
        {this.props.title && <h1>{this.props.title}</h1>}
      </div>
    )
  }
}
