import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import {NavLink} from 'react-router-dom'

export class PersonalDetails extends Component {
    render() {
        return (
                <Row md={3} >
                    <Col>
                      <Image src="https://via.placeholder.com/150" />
                    </Col>
                    <Col>
                         <Row>
                            <Col>
                                <h2>Username</h2>
                            </Col>
                            <Col>
                            <button><NavLink to='/edit'>Edit Profile</NavLink></button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span>342 Posts</span>
                            </Col>
                            <Col>
                                <span>342 Followers</span>
                            </Col>
                            <Col>
                                <span>342 Following</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Bio</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        )
    }
}

export default PersonalDetails
