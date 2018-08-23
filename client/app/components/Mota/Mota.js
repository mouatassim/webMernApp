import React from "react";


class Mota extends React.Component{
    

    _hendlSubmit(){
        alert('hello world ');
    }
    
    
    render(){

        return(
    
          <div>
            <h1>Hello It's Mota</h1>
            <input type="submit" value="Test" onClick={this._hendlSubmit.bind(this)}/>
          </div>
    
        )
      }
    }
    
    export default Mota;