import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    const post = this.props.post

    return (
      <article className='post' key={post.id}>
        <h1>{post.title}</h1>
        <TimeAgo date={post.publishedAt * 1000} minPeriod={60} />
        <ReactMarkdown source={post.text} />
      </article>
    );
  }
}
