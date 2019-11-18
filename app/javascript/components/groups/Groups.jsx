
import React from "react"
import { connect } from 'react-redux'
import { Button } from 'reactstrap';

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
            <div className="horizontalLayout">
                <h1>Groups</h1>
                <Button color="success" className="addButton">Add +</Button>{' '}
                <Button color="success" className="pendingInvitesButton">Pending Invites</Button>{' '}
            </div>
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