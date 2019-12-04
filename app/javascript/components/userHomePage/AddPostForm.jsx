import React from "react"
import styles from './styles'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddPostForm = ({
  userId,
  postToUser,
  postToGroup,
  onClose,
  users,
  groups
}) => {

    const [postTo, setPostTo] = React.useState("Personal");
    const [body, setBody] = React.useState("");
    const [selectedUser, setSelectedUser] = React.useState(users && users.length > 0 ? users[0].first_name : null);
    const [selectedGroup, setSelectedGroup] = React.useState(groups && groups.length > 0 ? groups[0].name : null);

    const getUserIdFromName = (name) => {
      let foundId = null
      users.forEach(user => {
        if(String(user.first_name).valueOf() === String(name.split(" ")[0]).valueOf()) {
           foundId = user.id
        }
      })
      return foundId
    }

    const getGroupIdFromName = (name) => {
      let foundId = null
      groups.forEach(group => {
        if (String(group.name).valueOf() === String(name).valueOf()) {
          foundId = group.id; 
        }
      })
      return foundId
    }

    const sendPost = () => {
      if (postTo == "User" && selectedUser != null) {
        let posting_id = getUserIdFromName(selectedUser);
        postToUser(userId, body, posting_id);
      } else if (postTo == "Group" && selectedGroup != null) {
        let posting_id = getGroupIdFromName(selectedGroup);
        postToGroup(userId, body, posting_id);
      } else {
        postToUser(userId, body, null);
      }
      onClose();
    }

    const renderSelectPostTo = () => {
        return (
            <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Post To Type:</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input onChange={e => setPostTo("Personal")} type="radio" name="radio2" />{' '}
              Personal (Only Me)
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input onChange={e => setPostTo("User")} type="radio" name="radio2" />{' '}
              Connection
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input onChange={e => setPostTo("Group")} type="radio" name="radio2" />{' '}
              Group
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input onChange={e => setPostTo("Public")} type="radio" name="radio2" />{' '}
              Public
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
        )
    }


    return (
        <div className="addPostForm">
          <h2>{postTo}</h2>
            <Form>
                {renderSelectPostTo()}
                {postTo != "Personal" && postTo != "Public" &&
                    <FormGroup row>
                        <Label for="select" sm={2}>Select To Post To</Label>
                        <Col sm={10}>
                            {postTo == "User" ? <Input value={selectedUser} onChange={e => {
                              setSelectedUser(e.target.value)
                            }} type="select" name="select" id="select"> 
                                { users.map( user => <option>{user.first_name} {user.last_name}</option>) }}
                            </Input>
                            : <Input value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)} type="select" name="select" id="select"> 
                                { groups.map( group => <option>{group.name}</option>) }}
                            </Input>
                            }
                        </Col>
                    </FormGroup> }
                <FormGroup row className="postBodyField">
                    <Label for="body">Post Body</Label>
                    <Col sm={10}>
                        <Input value={body} onChange={e => setBody(e.target.value)} type="textarea" name="body" id="body" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={() => sendPost()}>Post</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddPostForm;