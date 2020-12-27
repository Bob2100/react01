import React, { Component } from 'react'
import './App.css'

function Cart(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>商品名称</th>
          <th>商品数量</th>
          <th>合计金额</th>
        </tr>
        {props.cart.map(item => (
          <tr key={item.text}>
            <td>{item.text}</td>
            <td>{item.count}</td>
            <td>{item.count * item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default class CartSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: [
        { text: 'Web前端1', price: 888 },
        { text: 'Web前端2', price: 888 },
        { text: 'Web前端3', price: 888 }
      ],
      text: '',
      price: '',
      cart: []
    }
  }

  inputChange = (e, key) => {
    let obj;
    const value = e.target.value;
    key === 'text' ? obj = { text: value } : obj = { price: value };
    this.setState(obj);
  }

  addGood = () => {
    this.setState(preState => {
      return {
        goods: [...preState.goods, { id: 4, text: preState.text, price: 999 }]
      }
    });
  }

  addToCart(good) {
    const newCart = [...this.state.cart];
    const item = newCart.find(item => item.text === good.text);
    if (item) {
      item.count++
    } else {
      newCart.push({ ...good, count: 1 });
    }
    this.setState({
      cart: newCart
    });
  }

  render() {
    const goods = this.state.goods.map(good => (
      <tr key={good.text}>
        <td>{good.text}</td>
        <td>{good.price}</td>
        <td><button onClick={() => this.addToCart(good)}>加入购物车</button></td>
      </tr>
    ));
    return (
      <div>
        {this.props.title && <h1>{this.props.title}</h1>}
        <h3>商品列表</h3>
        商品名称:<input type="text" value={this.state.text} onChange={e => this.inputChange(e, 'text')} />
        商品价格:<input type="text" value={this.state.price} onChange={e => this.inputChange(e, 'price')} />
        <button onClick={this.addGood}>添加商品</button>
        <table>
          <tbody>
            <tr>
              <th>商品名称</th>
              <th>商品价格</th>
              <th>操作</th>
            </tr>
            {goods}
          </tbody>
        </table>
        <h3>购物车</h3>
        <Cart cart={this.state.cart} />
      </div>
    )
  }
}
