import React from "react"
import ConnectionRowItem from './ConnectionRowItem'


const ConnectionsList = ({
    currentUser,
    connections,
    getUserVisiblePostsForConnection,
    addComment,
    addLike,
    connectionPosts
}) => {

    const renderConnection = (connection) => {
        return (
            <ConnectionRowItem {...{
                currentUser,
                connection,
                addComment,
                addLike,
                userVisiblePosts: connectionPosts[connection.id]
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