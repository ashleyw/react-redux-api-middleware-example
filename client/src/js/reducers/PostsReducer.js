import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST_SUCCESS
} from '../actions/PostsActions';


const INITIAL_STATE = { postsList: { posts: [], error: null, loading: false } };

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_POSTS:
  	return { ...state, postsList: { posts: [], error: null, loading: true} };
  case FETCH_POSTS_SUCCESS:
    return { ...state, postsList: { posts: action.payload.posts, error: null, loading: false } };
  case FETCH_POSTS_FAILURE:
    error = action.payload.data || { message: action.payload.message };
    return { ...state, postsList: { posts: [], error: error, loading: false } };
  case ADD_POST_SUCCESS:
    return {...state, postsList: { posts: [action.payload, ...state.postsList.posts], error: null, loading: false } }
  case DELETE_POST_SUCCESS:
    const posts = state.postsList.posts.filter((post) => { return post.id !== action.payload.id })
    return {...state, postsList: { posts: posts, error: null, loading: false } }
  default:
    return state;
  }
}
