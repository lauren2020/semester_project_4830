import React from "react"
import styles from './styles'

const UserInfoBanner = ({
    user
}) => {
    return (
        <div className="mainUserInfoBanner">
            <img className="circularProfile" src={user.profile_url} alt="..."/>
            <div className="userInfo">
                <h1>{user.first_name} {user.last_name}</h1>
                <p>Connections: {user.friends.length}</p>
            </div>
        </div>
    )
}

export default UserInfoBanner;