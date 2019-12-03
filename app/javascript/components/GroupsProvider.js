import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Groups from './groups/Groups'

import { users, posts } from './mockData'

const currentUser = users[0];

const getPosts = (postIds) => {
    const postObjects = [];
    postObjects.push(posts[0]);
    postObjects.push(posts[1]);
    postObjects.push(posts[2]);
    postObjects.push(posts[5]);
    return postObjects;
  }

class GroupsProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
      userGroups: this.props.groups,
      userConnections: this.props.connections,
      userPosts: getPosts()
    });
    return (
        <Provider store={store}>
            <Groups></Groups>
        </Provider>
    );
  }
}

export default GroupsProvider;