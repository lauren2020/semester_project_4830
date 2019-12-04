import React from "react"
import PropTypes from "prop-types"

import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import PrivacySettings from './privacySettings/PrivacySettings'

class PrivacySettingsProvider extends React.Component {
  render () {
    const store = configureStore({
      currentUser: this.props.user,
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