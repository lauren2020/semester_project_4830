import React from "react"

import SearchBar from '../shared/SearchBar'
import UserInfoBanner from './UserInfoBanner'
 
const UserHomePage = ({
    user,
    displayedPosts
}) => {
    return (
        <div>
            <UserInfoBanner {...{
                user
            }}>   
            </UserInfoBanner>
            {/* <SearchBar {...{

            }}></SearchBar> */}
            {/* <PostsList {...{
                posts: displayedPosts
            }}></PostsList> */}
        </div>
    )
}

export default UserHomePage;
