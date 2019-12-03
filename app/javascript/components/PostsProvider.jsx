import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Posts from './posts/Posts'

class PostsProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
      userPosts: this.props.feed,
    });
    return (
        <Provider store={store}>
          <Posts {...{
              posts: this.props.feed
          }}></Posts>
        </Provider>
    );
  }
}

export default PostsProvider;