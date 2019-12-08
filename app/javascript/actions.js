/*
 * action types
 */

export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_LIKE = 'ADD_LIKE'
export const SET_PAGE_FILTER = 'SET_PAGE_FILTER'

export const SEARCH_GROUPS = 'SEARCH_GROUPS'
export const CREATE_GROUP = 'CREATE_GROUP'
export const ADD_GROUP = 'ADD_GROUP'
export const ADD_CONNECTION = 'ADD_CONNECTION'

export const SET_PRIVACY= 'SET_PRIVACY'

// export const ADD_COMMENT = 'ADD_COMMENT'
// export const ADD_LIKE = 'ADD_LIKE'

export const IS_LOADING = 'IS_LOADING'

/*
 * other constants
 */

export const PageFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_MY_POSTS: 'SHOW_MY_POSTS',
  SHOW_UNREAD_POSTS: 'SHOW_UNREAD_POSTS'
}

/*
 * action creators
 */

 export function setLoading(status) {
  return { type: IS_LOADING, status }
 }

export function createGroup(user_id, name) {
  return { type: CREATE_GROUP, user_id, name }
}

export function addGroup(group) {
  return { type: ADD_GROUP, group }
}

export function addConnection(connection) {
  return { type: ADD_CONNECTION, connection }
}

export function addPost(text) {
  return { type: ADD_POST, text }
}

export function addLike(user_id, post_id) {
  return { type: ADD_LIKE, user_id, post_id }
}

export function addComment(post_id, comment) {
  return { type: ADD_COMMENT, post_id, comment }
}

export function setPrivacySetting(settings) {
  return { type: SET_PRIVACY, settings }
}

export function addCommentToPost(post, comment, user) {
  return { type: ADD_COMMENT, text: comment, post_id: post.id, user }
}

export function addLikeToPost(post) {
  return { type: ADD_LIKE }
}

export function setPageFilter(filter) {
  return { type: SET_PAGE_FILTER, filter }
}