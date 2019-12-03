import React from "react"

import styles from './styles';

import BaseDivider from '../shared/BaseDivider'
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Post = ({
    post,
    addComment,
    addLike,
    currentUser
}) => {
    const [showComments, setShowComments] = React.useState(false);
    const [commentBody, setCommentBody] = React.useState("");

    const renderComment = (comment) => {
        return (
            <div className="comment">
                <h4>{comment.user.first_name} {comment.user.last_name}</h4>
                <p>{comment.content.body}</p>
                <BaseDivider {...{
                    color: "lightgray"
                }}></BaseDivider>
            </div>
        )
    }

    const renderCommentsSection = (comments) => {
        return (
            <div>
                <BaseDivider {...{
                    color: "lightgray"
                }}></BaseDivider>
                {comments.map(comment => renderComment(comment))}
                <div className="horizontalLayoutLight">
                    <InputGroup className="addCommentBox">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>+</InputGroupText>
                        </InputGroupAddon>
                        <Input value={commentBody} onChange={e => setCommentBody(e.target.value)} placeholder="Comment..." />
                    </InputGroup>
                    <Button className="postButton" onClick={() => addComment(commentBody, post.content.id, currentUser.id)}>Post</Button>
                </div>
            </div>
        )
    }

    return (
        <div className="post">
            <div className="postHeader">
                <div className="horizontalLayoutLight">

                    <img className="circularSquare" src={post.user.profile_url} alt="..."/>

                    <div className="postIdentifierInfo">
                        <h2>{post.user.first_name} {post.user.last_name}</h2>
                
                        <div className="horizontalLayoutLight">
                            <p>{post.date} : </p>
                            {post.shared_to_group != null && post.shared_to_group == "PUBLIC"
                                ? <p>Public</p>
                                : post.shared_to_group != null
                                    ? <p>{post.shared_to_group.name}</p>
                                    : post.shared_to_user != null
                                        ? <p>{post.shared_to_user.first_name} {post.shared_to_user.last_name}</p>
                                        : <p>Only Me</p>}
                        </div>
                    </div>

                </div>
            </div>
            <p  className="postBody">{post.content.body}</p>
            <div className="postFooter">
                <p className="postFooterOption" onClick={() => addLike(post.content.id, currentUser.id)}>Likes: {post.content.likes.length} </p>
                <p>||</p>
                <p className="postFooterOption" onClick={() => setShowComments(!showComments)}>Comments: {post.comments.length}</p>
                {/* <p>||</p>
                <p className="postFooterOption">Remove From Visibility</p> */}
            </div>
            {showComments && renderCommentsSection(post.comments)}
        </div>
    )
}

export default Post;