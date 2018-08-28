import React from 'react';


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

        this.setState({ email: event.target.value })
    };

    _hendlSearchButton(){
      alert("searching");
    }




    render(){

        return(
        <div className="header">

          <div className="headerSearch">
            <input type="text" rel="changeEmail" placeholder="Email" onChange={this._handleEmailText.bind(this)} />
            <input type="text" rel="changePassword" placeholder="Password" onChange={this._handlePasswordText.bind(this)} />
            <input type="button" value="Search" onClick={this._hendlSearchButton.bind(this)} />
          </div>

          

        </div>  
        )
      }
    }
    export default Signin;