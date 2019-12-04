import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Connections from './connections/Connections'

class ConnectionsProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
      userConnections: this.props.connections,
      connectionPosts: this.props.connection_posts
    });
    return (
        <Provider store={store}>
            <Connections></Connections>
        </Provider>
    );
  }
}

export default ConnectionsProvider;