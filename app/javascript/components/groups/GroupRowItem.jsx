import React from "react"
import BaseDivider from '../shared/BaseDivider'
import styles from './styles'
import { Button } from 'reactstrap';
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
                <div className="column">
                    <h2>{group.name}</h2>
                    <p>Members: {group.users.length}</p>
                </div>
                <BaseDivider {...{
                    color: "lightgray",
                    length: "70%"
                }}></BaseDivider>
                <Button color="success" className="addButton">Invite People</Button>{' '}
            </div>
            {showPosts && <PostsList {...{
                posts: userVisiblePosts
            }}></PostsList>}
            <BaseDivider></BaseDivider>
        </div>
    )
}

export default GroupRowItem;