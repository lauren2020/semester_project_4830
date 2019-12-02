import React from "react"
import styles from './styles'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const InviteUserToGroupForm = ({
    inviting_user_id,
    group_id,
    userConnections,
    inviteUser,
    onClose
}) => {
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [showError, setShowError] = React.useState(false);

    const renderUserSelector = () => {
        return (
            <FormGroup row>
                <Label for="select" sm={2}>User To Invite:</Label>
                <Col sm={10}>
                    <Input innerRef={(user) => setSelectedUser(user)} type="select" name="select" id="select"> 
                        { userConnections.map( connection => <option>{connection.first_name} {connection.last_name}</option>) }}
                    </Input>
                </Col>
            </FormGroup>
        )
    }

    const onInviteClicked = () => {
        if (selectedUser == null) {
            setShowError(true)
            return
        }
        setShowError(false)
        inviteUser(group_id, inviting_user_id, selectedUser.id)
        onClose()
    }

    return (
        <div className="addGroup">
            <h2>Create New Group</h2>
            {showError && <p>! Pleace select a user to invite</p>}
            <Form >
                {renderUserSelector()}
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={onInviteClicked}>Invite User</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default InviteUserToGroupForm;
