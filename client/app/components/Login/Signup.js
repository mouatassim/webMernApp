import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

class Signup extends React.Component{
    
    constructor (){
        super();
        this.state={
          'firstName' :'' ,
          'lastName':'',
          'email':'',
          'password':'',
          'dateOfBirth':'',
          'Gendre':'',

          'redirect':false
        };
      }

    
      
    
      
    
    _handleChangeFirstName(event){

        this.setState({ firstName: event.target.value })
    }

    _handleChangeLastName(event){

      this.setState({ lastName: event.target.value })

    }
    
    _handleChangeEmail(event){

      this.setState({ email: event.target.value })
   }

   _handleChangePassword(event){

    this.setState({ password: event.target.value })
  }

  

    _hendlSubmit(e){

            e.preventDefault();
            var user ={
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password

            }

                    

            axios.post(`/api/account/signup`,user)
            .then(res => {
              console.log(res);
              console.log(res.data);
              this.setState({'redirect' : true});
        
            })
            
        }
                
               
        
      
    
    
    
    render(){

        if (this.state.redirect) {
          return <Redirect to='/welcome'/>;
        }
        return(
    
          <div className="mainBack">
            <input className="firstName" type="text" ref="editFirstName" placeholder="First Name" onChange={this._handleChangeFirstName.bind(this)} />
            <input className="lastName" type="text" ref="editLastName" placeholder="Last Name" onChange={this._handleChangeLastName.bind(this)} /><br />
            <input type="email" ref="editEmail" placeholder="Email" onChange={this._handleChangeEmail.bind(this)} /><br />
            <input type="password" ref="editPassword" placeholder="Password" onChange={this._handleChangePassword.bind(this)} /><br />
            <input type="submit" value="Sign up" onClick={this._hendlSubmit.bind(this)}/>
            
            
          </div>
    
        )
      }
    }
    
    export default Signup;