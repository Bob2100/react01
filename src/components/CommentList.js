import React, { Component } from 'react'

// function Comment({ data }) {
//   console.log('render');
//   return (
//     <div>
//       <p>-{data.author}-</p>
//       <p>{data.body}</p>
//     </div>
//   )
// }
class Comment extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.data.author === this.props.data.author && nextProps.data.body === this.props.data.body) {
      return false;
    }
    return true;
  }

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
          <Comment key={i} data={c}></Comment>
        ))}
      </div>
    )
  }
}
