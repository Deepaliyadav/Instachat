import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

class Status extends Component {
    render() {
        return <Image src={this.props.source} roundedCircle />    
    }
}

export default Status
