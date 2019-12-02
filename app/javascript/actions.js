/*
 * action types
 */

export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_LIKE = 'ADD_LIKE'
export const SET_PAGE_FILTER = 'SET_PAGE_FILTER'

export const SEARCH_GROUPS = 'SEARCH_GROUPS'
export const CREATE_GROUP = 'CREATE_GROUP'

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

export function addPost(text) {
    console.log("Action Recieved: ", text);
  return { type: ADD_POST, text }
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