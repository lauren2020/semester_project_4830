import React from "react"

import styles from './styles';

const Post = ({
    post
}) => {
    return (
        <div className="post">
            <div className="postHeader">
                <div className="horizontalLayout">
                    <img className="circularSquare" src={post.user.profile_url} alt="..."/>
                    <h2>{post.user.first_name} {post.user.last_name}</h2>
                </div>
                <div className="horizontalLayout">
                <p>{post.date} : </p>
                {post.public
                    ? <p>Public</p>
                    : post.groups.length > 0
                        ? <p>{post.groups[0].name}</p>
                        : post.people.length > 0
                            ? <p>{post.people[0].first_name} {post.people[0].last_name}</p>
                            : <p>Only Me</p>}
                </div>
            </div>
            <p>{post.body}</p>
            <div className="postFooter">
                <p>Likes: {post.likes.length} </p>
                <p>Comments {post.comments.length}</p>
            </div>
        </div>
    )
}

export default Post;