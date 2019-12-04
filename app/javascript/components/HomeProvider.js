import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import HomePage from './HomePage'


class HomeProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
      userGroups: this.props.groups,
      userConnections: this.props.connections
    });
    return (
        <Provider store={store}>
          <HomePage {...{}}/>
        </Provider>
    );
  }
}

export default HomeProvider;
