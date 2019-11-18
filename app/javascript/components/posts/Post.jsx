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

    const renderComment = (comment) => {
        return (
            <div className="comment">
                <h4>{comment.user.first_name} {comment.user.last_name}</h4>
                <p>{comment.body}</p>
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
                        <Input placeholder="Comment..." />
                    </InputGroup>
                    <Button className="postButton" onClick={() => addComment("test", post, currentUser)}>Post</Button>
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
                            {post.public
                                ? <p>Public</p>
                                : post.groups.length > 0
                                    ? <p>{post.groups[0].name}</p>
                                    : post.people.length > 0
                                        ? <p>{post.people[0].first_name} {post.people[0].last_name}</p>
                                        : <p>Only Me</p>}
                        </div>
                    </div>

                </div>
            </div>
            <p  className="postBody">{post.body}</p>
            <div className="postFooter">
                <p className="postFooterOption" onClick={() => addLike(post)}>Likes: {post.likes.length} </p>
                <p>||</p>
                <p className="postFooterOption" onClick={() => setShowComments(!showComments)}>Comments: {post.comments.length}</p>
                <p>||</p>
                <p className="postFooterOption">Remove From Visibility</p>
            </div>
            {showComments && renderCommentsSection(post.comments)}
        </div>
    )
}

export default Post;