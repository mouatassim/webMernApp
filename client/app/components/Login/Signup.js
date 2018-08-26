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
          'redirect':false
        };
      }

    
      
    
      
    
    _handleChangeFirstName(event){

        this.setState({ firstName: event.target.value })
    }

    _handleChangeLastName(event){

        this.setState({ lastName: event.target.value })

    }
    

    _hendlSubmit(e){

            e.preventDefault();
            var user ={
                firstName: this.state.firstName,
                lastName: this.state.lastName
            }

                    

            axios.post(`/postUser`,user)
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
            <input type="text" ref="editFirstName" placeholder="First Name" onChange={this._handleChangeFirstName.bind(this)} /><br />
            <input type="text" ref="editLastName" placeholder="Last Name" onChange={this._handleChangeLastName.bind(this)} /><br />
            <input type="submit" value="Sign up" onClick={this._hendlSubmit.bind(this)}/>
            
            
          </div>
    
        )
      }
    }
    
    export default Signup;