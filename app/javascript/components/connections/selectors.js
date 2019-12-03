import { createSelector } from 'reselect'

const getCurrentUser = state => state.currentUser
const getUserConnections = state => state.userConnections
const userPosts = state => state.userPosts

const getUserVisiblePostsForConnection = (userId) => createSelector(
    [userPosts],
    posts => posts
)

const getVisibleConnections = createSelector(
  [getUserConnections],
  (connections) => connections
)

const mapStateToProps = state => {
  return {
      state,
    userConnections: getVisibleConnections(state),
    currentUser: getCurrentUser(state),
    getUserVisiblePostsForConnection,
    userPosts
  }
}

export default mapStateToProps;
