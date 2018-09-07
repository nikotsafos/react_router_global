import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h4>{this.props.author}</h4>
        <p>{this.props.body}</p>
        <h2>{this.props.comments}</h2>
      </div>
    );
  }
}

export default Blog;
