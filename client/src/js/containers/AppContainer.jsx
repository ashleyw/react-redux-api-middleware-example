import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Header from '../components/Header'

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header/>

      	<Grid style={{ width: '900px' }}>
          <Row>
            { this.props.children }
          </Row>
        </Grid>
      </div>
    );
  }
}
