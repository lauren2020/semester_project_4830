import React from "react"
import BaseDivider from '../shared/BaseDivider'
import styles from './styles'
import { Button } from 'reactstrap';
import PostsList from '../posts/PostsList'
import InviteUserToGroupForm from './InviteUserToGroupForm'

const GroupRowItem = ({
    currentUser,
    group,
    userVisiblePosts,
    togglePopup,
    userConnections,
    inviteUser
}) => {
    const [showPosts, setShowPosts] = React.useState(false);
    const [showInviteUsersForm, setShowInviteUsersForm] = React.useState(false);

    const toggleShowPost = () => {
        setShowPosts(!showPosts);
        console.log(showPosts);
    }

    console.log("user visible posts", userVisiblePosts);

    return (
        <div className="rowItem">
            <div className="groupRowItemHeader" onClick={() => toggleShowPost()}>
                <img className="circularSquare" src={group.profile_url} alt="..."/>
                <div className="column">
                    <h2>{group.name}</h2>
                    <p>Members: {group.members_count}</p>
                </div>
                {currentUser.id == group.user_id && <div className="ownerTag">
                    <h3>Owner</h3>
                </div>}
                <Button color="primary" className="invitePeopleButton" onClick={() => setShowInviteUsersForm(!showInviteUsersForm)}>{showInviteUsersForm ? "Close Invite" : "Invite People"}</Button>{' '}
            </div>
            {showInviteUsersForm && <InviteUserToGroupForm {...{
                inviting_user_id: currentUser.id,
                group_id: group.id,
                userConnections,
                inviteUser,
                onClose: () => {
                    setShowInviteUsersForm(false)
                }
            }}></InviteUserToGroupForm>}
            {showPosts && <PostsList {...{
                posts: userVisiblePosts
            }}></PostsList>}
            <BaseDivider></BaseDivider>
        </div>
    )
}

export default GroupRowItem;