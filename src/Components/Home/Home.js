import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Status from './Status';
import Connection from './Connection';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             statusPictures:['https://via.placeholder.com/100',
             'https://via.placeholder.com/100', 
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100']
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col style={styles.statusPictures}>
                    {
                        this.state.statusPictures.map((picture)=><Status source={picture} />)
                    }       
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Connection />
                    </Col>
                </Row>

            </Container>
        )
    }
}

const styles = {
    statusPictures:{
        display:'flex',
        justifyContent:'space-around'
    }
}
export default Home
