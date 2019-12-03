import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Connections from './connections/Connections'

import { users, groups, posts } from './mockData'

//const currentUser = users[0];

// const getConnections = (connectionIds) => {
//   const connectionObjects = [];
//   connectionObjects.push(users[1]);
//   connectionObjects.push(users[2]);
//   return users;
// }

class ConnectionsProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
      userConnections: this.props.connections, //getConnections(currentUser.friends),
      userPosts: posts
    });
    //console.log("USER IN PROPS: " + this.props.user);
    return (
        <Provider store={store}>
            <Connections></Connections>
        </Provider>
    );
  }
}

export default ConnectionsProvider;