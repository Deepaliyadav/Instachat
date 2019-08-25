import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class Connection extends Component {
    render() {
        return (
            <Row>
                <Col className="my-4" >
                   <Image src={'https://via.placeholder.com/50'} roundedCircle />
                </Col>
                <Col md={2} className="my-4" >
                    <h5>Name</h5>
                    <p>Location</p>
                </Col>
                <Col md={{ span: 1, offset: 8 }} className="my-4" >
                    <p>Time Stamp</p>
                </Col>
                <Col md={12} >
                    <Image src={'https://via.placeholder.com/1200x400'} fluid />
                </Col>
                <Col md={12} className="my-2">
                    <FontAwesomeIcon icon={faHeart} size="2x" className="mr-2" />
                    <FontAwesomeIcon icon={faComment} size="2x" className="mr-2" />
                    <FontAwesomeIcon icon={faPaperPlane} size="2x" className="mr-2" />
                </Col>
            </Row>
        )
    }
}

export default Connection
