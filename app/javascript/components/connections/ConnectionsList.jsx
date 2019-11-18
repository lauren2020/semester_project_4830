import React from "react"
import ConnectionRowItem from './ConnectionRowItem'

import { posts } from '../mockData'

const ConnectionsList = ({
    connections,
    getUserVisiblePostsForConnection
}) => {

    const renderConnection = (connection) => {
        return (
            <ConnectionRowItem {...{
                connection,
                userVisiblePosts: posts //getUserVisiblePostsForConnection(connection.id),
            }}></ConnectionRowItem>
        )
    }

    return (
        <div>
            {connections.map(connection => renderConnection(connection))}
        </div>
    )
}

export default ConnectionsList;