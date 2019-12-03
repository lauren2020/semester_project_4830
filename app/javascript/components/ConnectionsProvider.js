import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Connections from './connections/Connections'

class ConnectionsProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
      userConnections: this.props.connections, //getConnections(currentUser.friends),
      connectionPosts: this.props.connection_posts
      //userPosts: posts
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