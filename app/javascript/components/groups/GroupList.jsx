import React from "react"
import GroupRowItem from './GroupRowItem'

const GroupList = ({
    groups,
    getGroupPosts
}) => {
    const renderGroup = (group) => {
        return (
            <GroupRowItem {...{
                group,
                userVisiblePosts: getGroupPosts(group.id)
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