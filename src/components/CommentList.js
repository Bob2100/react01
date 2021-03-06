import React, { Component, PureComponent } from 'react'

const Comment = React.memo(({ body, author }) => {
  console.log('render');
  return (
    <div>
      <p>-{author}-</p>
      <p>{body}</p>
    </div>
  )
});

// 1. PureComponent要求数据为值类型
// 2. 引用类型的话地址要相同，且数据只有一层
// class Comment extends PureComponent {

//   render() {
//     console.log('render');
//     return (
//       <div>
//         <p>-{this.props.author}-</p>
//         <p>{this.props.body}</p>
//       </div>
//     )
//   }
// }



export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        comments: [
          { body: 'How are you?', author: 'Bob' },
          { body: 'Fine', author: 'Jack' }
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} {...c}></Comment>
        ))}
      </div>
    )
  }
}
