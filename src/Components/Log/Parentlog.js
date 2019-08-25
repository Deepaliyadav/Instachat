import React, { Component } from 'react'
import Component1 from './../Log/Component1';
import './../Log/main.css'
import Component2 from './../Log/Component2';
import Component3 from './../Log/Component3';
class Parentlog extends Component {
    render() {
        return (
            <div className="topmost">
              <Component1 />
              <Component2 />
              <Component3 />
            </div>
        )
    }
}

export default Parentlog
