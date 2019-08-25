import React, { Component } from 'react'
import './main.css'
import Login from './Login';
import Formlogin from './Formlogin';
class Component1 extends Component {
    render() {
        return (
            <div>
                <div className="outer">
                    <h1>Instachat</h1> 
                      <Formlogin /> 
                      <div className="or-mid">OR</div>
                      <Login />
                </div>
            </div>
        )
    }
}

export default Component1
