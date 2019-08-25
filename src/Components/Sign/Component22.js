import React, { Component } from 'react'
import Appicon1 from './Appicon1';
import {NavLink} from 'react-router-dom';

class Component22 extends Component {
    render() {
        return (
            <div>
                <div>
                <div className="inner">
                    <span>Have an account ?</span><NavLink to="/Formlog" class="login"> Log In</NavLink>
                </div>

                <div className="app">Get the app.</div>
                <Appicon1 />
            </div>
            </div>
        )
    }
}

export default Component22
