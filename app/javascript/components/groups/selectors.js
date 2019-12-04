import { createSelector } from 'reselect'

const getCurrentUser = state => state.currentUser
const getUserGroups = state => state.userGroups
const getUserPosts = state => state.userPosts
const getUserConnections = state => state.userConnections
const groupSearchResults = state => state.groupSearchResults
const groupPosts = state => state.groupPosts

const sortByGroupName = () => {
  const property = "name"
  return function(a,b){  
    if(a[property] > b[property])  
       return 1;  
    else if(a[property] < b[property])  
       return -1; 
    return 0;  
 } 
}

const getSortedGroups = createSelector(
  [getUserGroups],
  (groups) => groups.sort(sortByGroupName())
)

const getGroupPosts = groupId => createSelector(
    [groupPosts],
    (posts) => posts
)

const mapStateToProps = state => {
  return {
    userGroups: getSortedGroups(state),
    currentUser: getCurrentUser(state),
    getGroupPosts,
    groupPosts: groupPosts(state),
    userConnections: getUserConnections(state)
  }
}

export default mapStateToProps;
