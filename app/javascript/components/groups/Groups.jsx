
import React from "react"
import { connect } from 'react-redux'

import mapDispatchToProps from './dispatch'
import mapStateToProps from './selectors'
import styles from './styles'
import GroupsList from './GroupList'

import BaseDivider from '../shared/BaseDivider'

const GroupsBase = ({
    currentUser,
    userGroups,
    getGroupPosts
}) => {
    console.log("userPosts", getGroupPosts());
    return (
        <div>
            <h1>Groups</h1>
            <GroupsList {...{
                groups: userGroups,
                getGroupPosts
            }}></GroupsList>
        </div>
    )
}

const Groups = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupsBase);
  

export default Groups;