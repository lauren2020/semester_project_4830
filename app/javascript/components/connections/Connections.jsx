import React from "react"
import { connect } from 'react-redux'

import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'

import BaseDivider from '../shared/BaseDivider'
import ConnectionsList from "./ConnectionsList"

const ConnectionsBase = ({
    userConnections,
    getUserVisiblePostsForConnection,
    userPosts
}) => {
    console.log("Connections", userConnections);
    return (
        <div>
            <h1>Connections</h1>
            <ConnectionsList {...{
                connections: userConnections,
                getUserVisiblePostsForConnection,
                userPosts
            }}></ConnectionsList>
        </div>
    )
}

const Connections = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectionsBase);
  

export default Connections;