import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import {Switch, Route, NavLink, Redirect} from 'react-router-dom'
import {Account, Contacts, ChangePassword, Privacy, Donate}from './Container';

class EditProfile extends Component {
    render() {
        return (
            <Container>
                <Row className="my-4" >
                    <Col >
                    <ListGroup>
                            <ListGroup.Item><NavLink to="/edit/account">Edit Profile</NavLink></ListGroup.Item>
                            <ListGroup.Item><NavLink to="/edit/change_password">Change Password</NavLink></ListGroup.Item>
                            <ListGroup.Item><NavLink to="/edit/contacts">Contacts</NavLink></ListGroup.Item>
                            <ListGroup.Item><NavLink to="/edit/privacy">Privacy & Security</NavLink></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                    <Switch>
                            <Route path="/edit/account" component={Account} />
                            <Route path="/edit/change_password" component={ChangePassword} />
                            <Route path="/edit/contacts" component={Contacts} />
                            <Route path="/edit/privacy" component={Privacy} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EditProfile
