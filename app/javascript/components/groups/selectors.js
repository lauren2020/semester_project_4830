import { createSelector } from 'reselect'

const currentUser = state => state.currentUser
const getUserGroups = state => state.userGroups
const getUserPosts = state => state.userPosts

const getVisibleGroups = createSelector(
  [getUserGroups],
  (groups) => groups
)

const getGroupPosts = groupId => createSelector(
    [getUserPosts],
    (posts) => posts.filter(groups.length > 0)
)

const mapStateToProps = state => {
  return {
    userGroups: getVisibleGroups(state),
    currentUser,
    getGroupPosts
  }
}

export default mapStateToProps;
