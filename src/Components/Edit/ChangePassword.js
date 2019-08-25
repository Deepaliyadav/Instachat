import React, { Component } from 'react'
import {ProfileInfo} from './Container';

class ChangePassword extends Component {
    render() {
        return (
            <div>
                <ProfileInfo />
                <form>
                    <input type='password' placeholder="Old Password" />
                    <input type='password' placeholder='New Password' />
                    <input type='password' placeholder='Confirm New Password' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ChangePassword
