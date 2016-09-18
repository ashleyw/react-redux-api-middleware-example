import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostContainer from './PostContainer'

import { fetchPosts } from '../actions/PostsActions'


@connect((state) => {
  return {
    posts: state.posts.postsList
  }
})
export default class PostListContainer extends Component {
  componentWillMount = () => {
    this.props.dispatch(fetchPosts())
  }

  render() {
    console.log(this.props);
    let { loading, posts } = this.props.posts;
    posts = posts.sort((a, b) => { return a.publishedAt - b.publishedAt }).reverse()
    const list = (posts && loading == false) ? posts.map(post => <PostContainer post={post} key={post.id} /> ) : ""

    return (
    	<div>
        {list}
    	</div>
    );
  }
}
