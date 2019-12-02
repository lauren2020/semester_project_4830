import React from "react"
import styles from './styles'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddGroupForm = ({
    userId,
    createGroup,
    onClose
}) => {
    const [name, setName] = React.useState("");
    const onCreateClicked = () => {
        createGroup(userId, name)
        onClose()
    }
    return (
        <div className="addGroup">
            <h2>Create New Group</h2>
            <Form >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input innerRef={(text) => setName(text)} type="text" name="name" id="name" placeholder="Name" />
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