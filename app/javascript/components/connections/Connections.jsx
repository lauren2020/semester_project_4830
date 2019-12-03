import React from "react"
import { connect } from 'react-redux'
import { Button } from 'reactstrap';

import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'

import BaseDivider from '../shared/BaseDivider'
import ConnectionsList from "./ConnectionsList"
import AddConnectionForm from './AddConnectionsForm'

const ConnectionsBase = ({
    currentUser,
    userConnections,
    getUserVisiblePostsForConnection,
    inviteUserToConnect,
    inviteUserToConnectByUsername,
    acceptConnectionInvite,
    addComment,
    addLike,
    connectionPosts
}) => {
    const [showPendingInvites, setShowPendingInvites] = React.useState(false);
    const [showAddConnection, setShowAddConnection] = React.useState(false);

    const renderInviteRow = (invite) => {
        return (
            <div className="pendingConnectionRow" >
                <img className="circularSquare" src={invite.inviting_user.profile_url} alt="..."/>
                <h2 className="pendingConnectionName">{invite.inviting_user.name}</h2>
                <Button className="acceptButton" color="success" onClick={() => {
                    acceptConnectionInvite(invite.inviting_user.id, invite.invited_user.id);
                    setShowPendingInvites(false);
                }}>Accept</Button>{' '}
            </div>
        )
    }

    return (
        <div>
            <div className="horizontalLayout">
                <h1 className="connectionsTitle">Connections</h1>
                <Button color="success" className="addButton" onClick={() => setShowAddConnection(!showAddConnection)}>{showAddConnection ? "Close" : "Add +"}</Button>{' '}
                <Button color="success" className="pendingInvitesButton" onClick={() => setShowPendingInvites(!showPendingInvites)}>{showPendingInvites ? "Close Requests" : "Pending Requests"}</Button>{' '}
            </div>
            {showAddConnection && <AddConnectionForm {...{
                userId: currentUser.id,
                inviteUserToConnectByUsername,
                onClose: () => {
                    setShowAddConnection(false)
                }
            }}></AddConnectionForm>}
            {showPendingInvites && <div>
                <h2>Pending Requests</h2>
                {currentUser.connection_requests.map(invite => renderInviteRow(invite))}
            </div>}
            <BaseDivider {...{
                    color: "darkgray"
                }}></BaseDivider>
            <ConnectionsList {...{
                connections: userConnections,
                getUserVisiblePostsForConnection,
                connectionPosts,
                addComment,
                addLike,
                currentUser
            }}></ConnectionsList>
        </div>
    )
}

const Connections = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectionsBase);
  

export default Connections;