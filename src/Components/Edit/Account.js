import React, { Component } from 'react'
import {ProfileInfo} from './Container'

class Account extends Component {
    render() {
        return (
            <>
                <ProfileInfo />
                <form>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Username' />
                    <input type='text' placeholder='Website' />
                    <textarea placeholder="Bio"></textarea>
                    <input type='email' placeholder='Email' />
                    <input type='number' placeholder='Mobile Number' />
                    <input type='radio' name='gender' />
                    <label>Male</label>
                    <input type='radio' name='gender' />
                    <label>Female</label>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default Account
