import React, { Component } from 'react'
import './main.css'
import fire from './../Sign/config'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class Formlogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
     
    submitData=(e)=>{
          e.preventDefault();
          //fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(()=>{
              alert('Logged In')
          })
          .catch((err)=>{
              alert(err.message);
          })
    }
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
                <input type="text" placeholder="  Phone number,username or email " name='email' onChange={this.formVal} value={this.state.email} /> <br/> <br/>
                    <input type="password" placeholder="  Password" name='password' onChange={this.formVal} value={this.state.password} />
                    <p className="first">Forgot Password ?</p>  <br />
                    <input type="submit" value="Log In" />
                </form>
            
            </div>
        )
    }
}

export default Formlogin
