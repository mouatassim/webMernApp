import React from "react";


class Header extends React.Component{
    
  constructor (){
    super();
    this.state={
      'searche':'',
      'redirect':false
    };
  }


    _handleSearch(event){

        this.setState({ searche: event.target.value })
    };

    _hendlSearchButton(){
      alert("searching");
    }




    render(){

        return(
        <div className="header">

          <div className="headerList">
            <ul>
              <li>Home</li>
              <li>Profile</li>
              <li>Otherthing</li>
            </ul>
          </div>

          <div className="headerSearch">
            <input type="text" rel="searchInpute" placeholder="What do you looking for" onChange={this._handleSearch.bind(this)} />
            <input type="button" value="Search" onClick={this._hendlSearchButton.bind(this)} />
          </div>

          <div className="headerUser">
            <h1 className="Me">Me</h1>
            <ul>
              <li className="setting"> 
                <ul>
                  <li>Edit Profile</li>
                  <li>Log out</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>  
        )
      }
    }
    
    export default Header;