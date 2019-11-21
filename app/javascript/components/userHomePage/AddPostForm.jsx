import React from "react"
import styles from './styles'

import { users, groups } from '../mockData'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddPostForm = () => {

    const [postTo, setPostTo] = React.useState(1);

    const renderSelectPostTo = () => {
        return (
            <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Post To Type:</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Personal (Only Me)
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Connection
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Group
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Public
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
        )
    }


    return (
        <div className="addPost">
            <Form>
                {renderSelectPostTo()}
                {postTo != 0 &&
                    <FormGroup row>
                        <Label for="select" sm={2}>Select To Post To</Label>
                        <Col sm={10}>
                            {postTo == 1 ? <Input type="select" name="select" id="select"> 
                                { users.map( user => <option>{user.first_name} {user.last_name}</option>) }}
                            </Input>
                            : <Input type="select" name="select" id="select"> 
                                { groups.map( group => <option>{group.name}</option>) }}
                            </Input>
                            }
                        </Col>
                    </FormGroup> }
                <FormGroup row className="postBodyField">
                    <Label for="body">Post Body</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="body" id="body" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Post</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddPostForm;