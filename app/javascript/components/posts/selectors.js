import { createSelector } from 'reselect'


const getUserPosts = state => state.userPosts
const getFilter = state => state.pageFilter
const currentUser = state => state.currentUser

const getVisiblePosts = createSelector(
  [getUserPosts, getFilter],
  (posts, filter) => posts
)

const mapStateToProps = state => {
  return {
    userPosts: getVisiblePosts(state),
    currentUser: currentUser(state)
  }
}

export default mapStateToProps;