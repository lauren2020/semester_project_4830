import React from "react"
import BaseDivider from '../shared/BaseDivider'
import styles from './styles'

import PostsList from '../posts/PostsList'

const GroupRowItem = ({
    group,
    userVisiblePosts
}) => {
    const [showPosts, setShowPosts] = React.useState(false);
    const toggleShowPost = () => {
        setShowPosts(!showPosts);
        console.log(showPosts);
    }

    console.log("user visible posts", userVisiblePosts);

    return (
        <div className="rowItem">
            <div className="horizontalLayout" onClick={() => toggleShowPost()}>
                <img className="circularSquare" src={group.profile_url} alt="..."/>
                <h2>{group.name}</h2>
            </div>
            {showPosts && <PostsList {...{
                posts: userVisiblePosts
            }}></PostsList>}
            <BaseDivider></BaseDivider>
        </div>
    )
}

export default GroupRowItem;