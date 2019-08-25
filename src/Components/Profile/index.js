import React, { Component } from 'react'
import PersonalDetails from './PersonalPosts';
import PersonalPosts from './PersonalDetails';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Profile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} className="my-3">
                    <PersonalDetails />
                    </Col>
                    <Col md={12} className="my-3">
                    <PersonalPosts />
                    </Col>
                </Row>
            </Container>
 )
    }
}

export default Profile
