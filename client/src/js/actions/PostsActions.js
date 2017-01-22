import { CALL_API } from 'redux-api-middleware';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_SUCCESS';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';


export const fetchPosts = () => ({
  [CALL_API]: {
    types: [FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE],
    endpoint: 'http://0.0.0.0:3001/api/posts',
    method: 'GET',
  }
});

export const addPost = (data) => ({
  [CALL_API]: {
    types: [ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE],
    endpoint: 'http://0.0.0.0:3001/api/post',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
});

export const deletePost = (id) => ({
  [CALL_API]: {
    types: [DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE],
    endpoint: `http://0.0.0.0:3001/api/post/${id}`,
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }
});
