import React, { Component } from 'react'
import Appicon from './Appicon';
import {NavLink} from 'react-router-dom';

class Component2 extends Component {
    render() {
        return (
            <div>
                <div className="inner">
                
                    <span>Don't have an account ?</span><NavLink className="login" to="/">Sign Up</NavLink>
                </div>

                <div className="app">Get the app.</div>
                <Appicon />
            </div>
        )
    }
}

export default Component2
