import React from "react"
import BaseDivider from '../shared/BaseDivider'

import PostsList from '../posts/PostsList'
import { Button } from 'reactstrap';

const ConnectionRowItem = ({
    connection,
    userVisiblePosts
}) => {
    const [showPosts, setShowPosts] = React.useState(false);
    const toggleShowPost = () => {
        setShowPosts(!showPosts);
        console.log(showPosts);
    }

    return (
        <div>
            <div className="connectionRowItemHeader" onClick={() => toggleShowPost()}>
                <img className="circularSquare" src={connection.profile_url} alt="..."/>
                <h2>{connection.first_name} {connection.last_name}</h2>
                {/* <BaseDivider {...{
                    color: "lightgray",
                    length: "70%"
                }}></BaseDivider> */}
                <Button color="primary" className="removeButton">Remove</Button>{' '}
            </div>

            {showPosts && <PostsList {...{
                posts: userVisiblePosts
            }}></PostsList>}
            <BaseDivider></BaseDivider>
        </div>
    )
}

export default ConnectionRowItem;