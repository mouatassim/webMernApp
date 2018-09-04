import React from 'react';
import { Redirect } from 'react-router'


class Signin extends React.Component {

constructor (){
    super();
    this.state={
      'email':'',
      'password':'',
      'redirect':false
    };
  }


    _handleEmailText(event){

        this.setState({ email: event.target.value })
    };

    _handlePasswordText(event){

        this.setState({ password: event.target.value })
    };

    _hendlSubmit(){

      const user = {
        email:this.state.email,
        password:this.state.password

      };
   
         fetch('/api/account/signin',{method:'POST',body: JSON.stringify(user),headers: {
                 "Content-Type": "application/json"
             }}).then(function(data){
            return data.json();
          }).then(json => {
            console.log(json);
            
            this.setState(
              {
                redirect: true
              }
          );
 
          }
        )
         console.log(user)
 
 
    }

    render(){


      if (this.state.redirect) {
        return <Redirect to='/users'/>;
      }

        return(
        <div className="headerSignIN">

          
            <input type="text" rel="changeEmail" placeholder="Email" onChange={this._handleEmailText.bind(this)} />
            <input type="text" rel="changePassword" placeholder="Password" onChange={this._handlePasswordText.bind(this)} />
            <input type="submit" value="Login" onClick={this._hendlSubmit.bind(this)} />
          

          

        </div>  
        )
      }
    }
    export default Signin;