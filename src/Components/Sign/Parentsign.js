import React, { Component } from 'react'
import './mainn.css'
import Component1 from './Component1';
import Component22 from './Component22';
import Component33 from './Component33';
class Parentsign extends Component {
    render() {
        return (
            <div className="topmost">
                <Component1 />
                 <Component22 /> 
                 <Component33 />
            </div>
        )
    }
}

export default Parentsign
