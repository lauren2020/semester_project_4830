/*
 * action types
 */

export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SET_PAGE_FILTER = 'SET_PAGE_FILTER'

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

export function addPost(text) {
    console.log("Action Recieved: ", text);
  return { type: ADD_POST, text }
}

export function addCommentToPost(post, comment) {
  return { type: ADD_COMMENT, comment }
}

export function setPageFilter(filter) {
  return { type: SET_PAGE_FILTER, filter }
}