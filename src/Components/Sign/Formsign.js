import React, { Component } from 'react'
import fire from './config'

class Formsign extends Component {
    constructor(){
        super()
        this.state ={
            email:'',
            name:'',
            username:'',
            password:''
        }
    }

    submitData =(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    }

    // emailVal = (e)=>{
    //     this.setState({
    //         email:e.target.value
    //     })
    // }
    // nameVal =(e)=>{
    //     this.setState({
    //         name:e.target.value
    //     })
    // }
    // usernameVal = (e)=>{
    //     this.setState({
    //         username:e.target.value
    //     })
    // }
    // passwordVal =(e)=>{
    //     this.setState({
    //         password:e.target.value
    //     })
    // }

    formVal =(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }
    render() {
        console.log(this.state)
        return (
            <div className="form">
               <form onSubmit={this.submitData}>
               <input type="text" placeholder="  Mobile number or email " name="email" onChange={this.formVal} /> <br/> <br/>
                <input type="text" placeholder="  Full Name " name="name" onChange={this.formVal} /> <br/> <br/>
                <input type="text" placeholder="  Username " name="username" onChange={this.formVal} /> <br/> <br/>
                    <input type="password" placeholder="  Password" name="password"  onChange={this.formVal} />
                    <input type="submit" value="Sign Up"  />
               </form>
            </div>
        )
    }
}

export default Formsign
