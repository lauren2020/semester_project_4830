import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Groups from './groups/Groups'


class GroupsProvider extends React.Component {
  render () {
    console.log("Group Posts:", this.props.group_posts , " ", this.props.group_posts.length);
    const store = configureStore({
      currentUser: this.props.user,
      userGroups: this.props.groups,
      userConnections: this.props.connections,
      groupPosts: this.props.group_posts
    });
    return (
        <Provider store={store}>
            <Groups></Groups>
        </Provider>
    );
  }
}

export default GroupsProvider;