import React from "react"
import ConnectionRowItem from './ConnectionRowItem'

import { posts } from '../mockData'

const ConnectionsList = ({
    connections,
    getUserVisiblePostsForConnection
}) => {

    const renderConnection = (connection) => {
        var filteredPosts = posts.filter(function (el) {
            return el.user.id == connection.id ||
                   (el.people.length > 0 && el.people[0].id == connection.id);
          });

        return (
            <ConnectionRowItem {...{
                connection,
                userVisiblePosts: filteredPosts //getUserVisiblePostsForConnection(connection.id),
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