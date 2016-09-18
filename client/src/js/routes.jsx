import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer';
import PostNewContainer from './containers/PostNewContainer';
import PostsListContainer from './containers/PostsListContainer';
import Layout from './components/Layout'

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={PostsListContainer} />
    <Route path="/posts/new" component={PostNewContainer}/>
  </Route>
);
