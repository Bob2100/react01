import React, { Component, PureComponent } from 'react'

// function Comment({ data }) {
//   console.log('render');
//   return (
//     <div>
//       <p>-{data.author}-</p>
//       <p>{data.body}</p>
//     </div>
//   )
// }

// 1. PureComponent要求数据为值类型
// 2. 引用类型的话地址要不相同，且数据只有一层
class Comment extends PureComponent {

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.data.author === this.props.data.author && nextProps.data.body === this.props.data.body) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log('render');
    return (
      <div>
        <p>-{this.props.data.author}-</p>
        <p>{this.props.data.body}</p>
      </div>
    )
  }
}



export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    const obj1 = { body: 'How are you?', author: 'Bob' };
    const obj2 = { body: 'Fine', author: 'Jack' };
    setInterval(() => {
      obj1.body += obj1.body
      obj2.body += obj2.body
      this.setState({
        comments: [
          obj1,
          obj2
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} data={c}></Comment>
        ))}
      </div>
    )
  }
}
