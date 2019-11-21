import React from "react"
import styles from './styles'

import { Button } from 'reactstrap'

import AddPostForm from './AddPostForm'

const UserInfoBanner = ({
    user
}) => {
    const [addPostOpen, setAddPostOpen] = React.useState(false);
    return (
        <div>
        <div className="mainUserInfoBanner">
            <img className="circularProfile" src={user.profile_url} alt="..."/>
            <div className="userInfo">
                <h1>{user.first_name} {user.last_name}</h1>
                <p>Connections: {user.friends.length}</p>
                <Button color="secondary" onClick={() => setAddPostOpen(!addPostOpen)}>{addPostOpen ? "Cancel" : "Add Post"}</Button>
            </div>
        </div>

            {addPostOpen && <AddPostForm></AddPostForm>}
        </div>
    )
}

export default UserInfoBanner;