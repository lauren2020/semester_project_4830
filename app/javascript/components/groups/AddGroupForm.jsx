import React from "react"
import styles from './styles'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddGroupForm = ({
    userId,
    createGroup,
    onClose
}) => {
    const [name, setName] = React.useState("");
    const [profileUrl, setProfileUrl] = React.useState("");
    const onCreateClicked = () => {
        createGroup(userId, name, profileUrl)
        onClose()
    }
    return (
        <div className="addGroup">
            <h2>Create New Group</h2>
            <Form >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="profile_url">Profile URL</Label>
                    <Input value={profileUrl} onChange={e => setProfileUrl(e.target.value)} type="text" name="profile_url" id="profile_url" placeholder="https://..." />
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={onCreateClicked}>Create Group</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddGroupForm;