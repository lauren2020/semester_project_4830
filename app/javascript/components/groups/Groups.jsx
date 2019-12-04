
import React from "react"
import { connect } from 'react-redux'
import { Button } from 'reactstrap';

import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'
import GroupsList from './GroupList'
import Popup from '../shared/Popup'
import AddGroupForm from './AddGroupForm'

import BaseDivider from '../shared/BaseDivider'

const GroupsBase = ({
    currentUser,
    userConnections,
    userGroups,
    getGroupPosts,
    createGroup,
    acceptInvite,
    inviteUser,
    addComment,
    addLike,
    groupPosts
}) => {
    const [showPendingInvites, setShowPendingInvites] = React.useState(false);
    const [showAddGroup, setShowAddGroup] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);
    let popupProps = {};
    const togglePopup = ({
        show,
        props
    }) => {
        popupProps = props;
        setShowPopup(show);
    }

    const renderInviteRow = (invite) => {
        return (
            <div>
                <h2>{invite.group.name}</h2>
                <Button color="success" onClick={() => {
                    acceptInvite(invite.group.id, invite.invited_user.id);
                    setShowPendingInvites(false);
                }}>Accept</Button>{' '}
            </div>
        )
    }

    return (
        <div>
            {showPopup && <Popup {...popupProps}></Popup>}
            <div className="horizontalLayout">
                <h1 className="groupsHeader">Groups</h1>
                <Button color="success" className="addButton" onClick={() => setShowAddGroup(!showAddGroup)}>{showAddGroup ? "Close"  : "Add +"}</Button>{' '}
                <Button color="success" className="pendingInvitesButton" onClick={() => setShowPendingInvites(!showPendingInvites)}>{showPendingInvites ? "Close Pending Invites" : "Pending Invites"}</Button>{' '}
            </div>
            {showAddGroup && <AddGroupForm {...{
                userId: currentUser.id,
                createGroup,
                onClose: () => {
                    setShowAddGroup(false)
                }
            }}></AddGroupForm>}
            {showPendingInvites && <div>
                <h2>Pending Invites</h2>
                {currentUser.group_invites.map(invite => renderInviteRow(invite))}
            </div>}
            <BaseDivider {...{
                    color: "darkgray"
                }}></BaseDivider>
            <GroupsList {...{
                currentUser,
                groups: userGroups,
                getGroupPosts,
                togglePopup,
                userConnections,
                inviteUser,
                addComment,
                addLike,
                groupPosts
            }}></GroupsList>
        </div>
    )
}

const Groups = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupsBase);
  

export default Groups;