import { createSelector } from 'reselect'


const getUserPosts = state => state.userPosts
const getFilter = state => state.pageFilter
const currentUser = state => state.currentUser
const userGroups = state => state.userGroups
const userConnections = state => state.userConnections

const getVisiblePosts = createSelector(
  [getUserPosts, getFilter],
  (posts, filter) => posts
  // [getVisibleTodos, getKeyword],
  // (visibleTodos, keyword) =>
  //   visibleTodos.filter(todo => todo.text.indexOf(keyword) > -1)
)

const mapStateToProps = state => {
  return {
    userPosts: getVisiblePosts(state),
    currentUser: currentUser(state),
    userConnections: userConnections(state),
    userGroups: userGroups(state)
  }
}

export default mapStateToProps;
