import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import HomePage from './HomePage'

const store = configureStore();

class HomeProvider extends React.Component {
  render () {
    return (
        <Provider store={store}>
          <HomePage />
        </Provider>
    );
  }
}

export default HomeProvider;
