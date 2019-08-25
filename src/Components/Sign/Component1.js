import React, { Component } from 'react'
import './mainn.css'
import Login from './../Log/Login'
import Formsign from './Formsign';
class Component1 extends Component {
    render() {
        return (
            <div>
                <div className="out">
                <h1>Instachat</h1> 
                <p className="pnv">Sign up to see photos and vedios of your friends.</p>
                <Login />
                       <div className="or">OR</div>
                <Formsign />
                <p className="terms">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                </div>
            </div>
        )
    }
}

export default Component1
