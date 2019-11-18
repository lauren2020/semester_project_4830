import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Posts from './posts/Posts'

import { users, posts } from './mockData'

const currentUser = users[0];

//const store = configureStore();
const getPosts = (postIds) => {
  const postObjects = [];
  postObjects.push(posts[0]);
  postObjects.push(posts[1]);
  postObjects.push(posts[2]);
  postObjects.push(posts[5]);
  return postObjects;
}
class PostsProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser,
      userPosts: getPosts(currentUser.posts),
    });
    return (
        <Provider store={store}>
          <Posts {...{
              posts: getPosts([])
          }}></Posts>
        </Provider>
    );
  }
}

export default PostsProvider;