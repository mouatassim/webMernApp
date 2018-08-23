import React from "react";
import axios from 'axios';

class Signup extends React.Component{
    
    constructor (){
        super();
        this.state={
          'firstName' :'' ,
          'lastName':'',
          'redirect':true
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
            })
        }
                
               
        
      
    
    
    
    render(){

        return(
    
          <div>
            <input type="text" ref="editFirstName" placeholder="First Name" onChange={this._handleChangeFirstName.bind(this)} />
            <input type="text" ref="editLastName" placeholder="Last Name" onChange={this._handleChangeLastName.bind(this)} />
            <input type="submit" value="Sign up" onClick={this._hendlSubmit.bind(this)}/>
          </div>
    
        )
      }
    }
    
    export default Signup;