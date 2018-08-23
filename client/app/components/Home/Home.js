import React from "react";


class Home extends React.Component{
    

    _hendlSubmit(){
      fetch('/newuser',{method:'POST'}).then().then(console.log("done"));
    }
    
    
    render(){

        return(
    
          <div>
            <h1>Hello World</h1>
            <input type="submit" value="Test" onClick={this._hendlSubmit.bind(this)}/>
          </div>
    
        )
      }
    }
    
    export default Home;