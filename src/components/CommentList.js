import React, { Component } from 'react'

function Comment({ data }) {
  return (
    <div>
      <p>-{data.author}-</p>
      <p>{data.body}</p>
    </div>
  )
}


export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
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
