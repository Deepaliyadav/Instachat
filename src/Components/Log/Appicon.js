import React, { Component } from 'react'
import img1 from './getapp.png'
import img2 from './googleplay.png'
class Appicon extends Component {
    render() {
        return (
            <div className="imgdiv">
                <img src={img1} className="image" />
                <img src={img2} className="image" />
            </div>
        )
    }
}

export default Appicon
