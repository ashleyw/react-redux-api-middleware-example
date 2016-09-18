import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Grid, Button, Col, Row } from 'react-bootstrap'
import profilePic from "../../../public/images/pic.jpg"

import { addPost } from "../actions/PostsActions"

export default class Header extends Component {
  goHome = () => { browserHistory.push('/') }
  newPost = () => { browserHistory.push('/posts/new') }

  render() {
    return (
    	<header>
        <Grid style={{ width: '900px' }}>
          <Row>
            <Col xs={12} md={8} className='logo' onClick={ this.goHome.bind(this) }>
              <img src={ profilePic } alt="Profile Pic"/>
              <h1>Ashley's Blog</h1>
            </Col>
            <Col xs={6} md={4} className='nav'>
              <Button bsStyle="success" onClick={ this.newPost.bind(this) }>New Post</Button>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}
