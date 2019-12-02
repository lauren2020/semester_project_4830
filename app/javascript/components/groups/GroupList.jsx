import React from "react"
import GroupRowItem from './GroupRowItem'


import { posts } from '../mockData'

const GroupList = ({
    currentUser,
    groups,
    getGroupPosts,
    togglePopup,
    userConnections,
    inviteUser
}) => {
    const renderGroup = (group) => {
        // var filteredPosts = posts.filter(function (el) {
        //     return (el.groups.length > 0 && el.groups[0].id == group.id);
        //   });

        return (
            <GroupRowItem {...{
                currentUser,
                group,
                userVisiblePosts: [],
                togglePopup,
                userConnections,
                inviteUser
            }}></GroupRowItem>
        )
    }
    return (
        <div>
            {groups.map(group => renderGroup(group))}
        </div>
    )
}

export default GroupList;