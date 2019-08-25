import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Chat extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <Col>
                                <h5>{this.props.Image}</h5>
                            </Col>
                            <Col style={styles.listLeft}>
                                <h5>{this.props.name}</h5>
                            </Col>
                            <Col style={styles.listRight}>
                                <h5>{this.props.time}</h5>
                            </Col>
                        </ListGroup.Item>
                        <ListGroup.Item style={styles.liHeight}></ListGroup.Item>
                        <ListGroup.Item>
                            <InputGroup>
                                <FormControl style={styles.liInput} placeholder="Type your text here.." />
                                <InputGroup.Append>
                                    <Button variant="outline-primary" style={styles.liBtn}>Send</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        )
    }
}

const styles={
    listLeft:{
        width:'50%',
        display: 'inline-block',
        padding: '0',
        margin: '0',
        verticalAlign: 'middle'
    },
    listRight:{
        width: '50%',
        display: 'inline-block',
        padding:0,
        margin: 0,
        fontSize:"small",
        textAlign:"Right",
        verticalAlign:'middle'
    },
    liHeight:{
        height:540
    },
    liInput:{
        border:'none'
    },
    liBtn:{
        fontWeight:600
    }
}

export default Chat
