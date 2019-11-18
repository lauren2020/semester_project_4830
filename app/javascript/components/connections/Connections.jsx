import React from "react"
import { connect } from 'react-redux'
import { Button } from 'reactstrap';

import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'

import BaseDivider from '../shared/BaseDivider'
import ConnectionsList from "./ConnectionsList"

const ConnectionsBase = ({
    userConnections,
    getUserVisiblePostsForConnection
}) => {
    console.log("Connections", userConnections);
    return (
        <div>
            <div className="horizontalLayout">
                <h1>Connections</h1>
                <Button color="success" className="addButton">Add +</Button>{' '}
                <Button color="success" className="pendingInvitesButton">Pending Requests</Button>{' '}
            </div>
            <ConnectionsList {...{
                connections: userConnections,
                getUserVisiblePostsForConnection
            }}></ConnectionsList>
        </div>
    )
}

const Connections = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectionsBase);
  

export default Connections;