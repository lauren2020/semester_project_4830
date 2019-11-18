import { createSelector } from 'reselect'

const currentUser = state => state.currentUser
const privacySettings = state => state.privacySettings

const getPrivacySettings = createSelector(
  [privacySettings],
  (privacySettings) => privacySettings
)

const mapStateToProps = state => {
  return {
    privacySettings: getPrivacySettings(state),
    currentUser
  }
}

export default mapStateToProps;