import React from "react"

import SearchBar from '../shared/SearchBar'
import UserInfoBanner from './UserInfoBanner'
 
const UserHomePage = ({
    user,
    displayedPosts,
    postToUser,
    postToGroup,
    userConnections,
    userGroups
}) => {
    return (
        <div>
            <UserInfoBanner {...{
                user,
                postToUser,
                postToGroup,
                userConnections,
                userGroups
            }}>   
            </UserInfoBanner>
        </div>
    )
}

export default UserHomePage;
