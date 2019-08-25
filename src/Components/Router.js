import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
//import Formsign from './../frSign/Formsign';
//import Parentsign om './../Sign/Parentsign';
import Parentlog from './Log/Parentlog'
import Home from './Home/Home'
import Profile from './Profile/index'
import EditProfile from './Edit';
import Inbox from './Chat';

class Router extends Component {
    render() {
        return (
            
                <Switch>
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/" exact component={Parentsign} /> */}
                    <Route path="/Formlog" component={Parentlog} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/edit" component={EditProfile}/>
                    <Route path="/chat" component={Inbox} />
                </Switch>
            
        )
    }
}

export default Router