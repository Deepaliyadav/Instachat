import React, { Component } from 'react'
import './mainn.css'
import img1 from './getapp.png'
import img2 from './googleplay.png'
class Appicon1 extends Component {
    render() {
        return (
            <div>
                <div className="imgdiv">
                <img src={img1} className="image" />
                <img src={img2} className="image" />
                </div>
            </div>
        )
    }
}

export default Appicon1
