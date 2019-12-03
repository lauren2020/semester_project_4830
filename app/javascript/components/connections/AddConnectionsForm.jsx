import React from "react"
import styles from './styles'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddConnectionForm = ({
    userId,
    inviteUserToConnectByUsername,
    onClose
}) => {
    const [name, setName] = React.useState("");
    const onSendRequestClicked = () => {
        inviteUserToConnectByUsername(userId, name)
        onClose()
    }
    return (
        <div className="addConnectionForm">
            <h2>Add Connection</h2>
            <Form >
                <FormGroup>
                    <Label for="name">Userame</Label>
                    <Input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" />
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={onSendRequestClicked}>Send Request</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddConnectionForm;