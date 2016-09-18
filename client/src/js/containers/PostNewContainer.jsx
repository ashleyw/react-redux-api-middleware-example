import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { addPost } from '../actions/PostsActions'
import NewPostForm from '../components/NewPostForm'

@connect(null, (dispatch) => {
  return {
    createPost: (data) => {
      dispatch(addPost(data))
      browserHistory.push('/')
    }
  }
})

export default class PostNewContainer extends Component {
  submit = (values) => {
    this.props.createPost(values)
  }

  render() {
    return (
    	<div>
        <h1>Create New Post</h1>
        <NewPostForm onSubmit={ this.submit.bind(this) }/>
    	</div>
    );
  }
}
