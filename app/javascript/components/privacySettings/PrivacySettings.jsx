import React from "react"
import { connect } from 'react-redux'

import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'

const PrivacySettingsBase = () => {
    return (
        <div>
            <h2>PrivacySettings</h2>
        </div>
    )
}

const PrivacySettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivacySettingsBase);

export default PrivacySettings;