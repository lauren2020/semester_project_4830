import React from "react"

import styles from './styles'
import Post from './Post'
import BaseDivider from '../shared/BaseDivider'

const PostsList = ({
    posts
}) => {
    console.log(posts);
    const renderPost = (post) => {
        return (
            <>
                <Post {...{
                    post
                }}></Post>
                <BaseDivider></BaseDivider>
            </>
        )
    }

    return (
        <div>
            <div className="postsHeader">
                POSTS
            </div>
            {posts.map(post => renderPost(post))}
        </div>
    )
}

export default PostsList;
