import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import PrivacySettings from './privacySettings/PrivacySettings'

import { users, posts } from './mockData'

const currentUser = users[0];

class PrivacySettingsProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser,
      privacySettings: this.props.privacy_settings
    });
    return (
        <Provider store={store}>
          <PrivacySettings></PrivacySettings>
        </Provider>
    );
  }
}

export default PrivacySettingsProvider;