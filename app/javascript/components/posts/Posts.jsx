import React from "react"
import { connect } from 'react-redux'

import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'

import Post from './Post'
import BaseDivider from '../shared/BaseDivider'
import PostsList from './PostsList'

const PostsBase = ({
    currentUser,
    onAddPost,
    userPosts,
    pageFilters
}) => {

    return (
        <div>
            <PostsList {...{
                    posts: userPosts
                }}></PostsList>
        </div>
    )
}

const Posts = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsBase);
  

export default Posts;