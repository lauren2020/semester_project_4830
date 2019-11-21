import React from "react"
import GroupRowItem from './GroupRowItem'


import { posts } from '../mockData'

const GroupList = ({
    groups,
    getGroupPosts
}) => {
    const renderGroup = (group) => {
        var filteredPosts = posts.filter(function (el) {
            return (el.groups.length > 0 && el.groups[0].id == group.id);
          });

        return (
            <GroupRowItem {...{
                group,
                userVisiblePosts: filteredPosts
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