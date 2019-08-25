import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';

class Navb extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <NavLink to="/">InstaChat</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline  style={styles.searchBar}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="ml-auto">
                        <NavLink to="/chat"><FontAwesomeIcon icon={faPaperPlane} style={styles.iconStyle} /></NavLink>
                        <Nav.Link href=""><FontAwesomeIcon icon={faHeart} style={styles.iconStyle} /></Nav.Link>
                        
                            <NavLink to="/profile">
                                <FontAwesomeIcon icon={faUser} style={styles.iconStyle} />
                            </NavLink>
                    
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


const styles = {
    searchBar:{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconStyle:{
        fontSize:24
    }
}

export default Navb
