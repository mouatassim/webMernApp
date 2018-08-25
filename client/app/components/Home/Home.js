import React from "react";
import Signup from "./../Login/Signup"

class Home extends React.Component{
    
    
    render(){

        return(
          <div className="mainBack">
          <h1>Hello world</h1>
          <Signup />
          </div>
        )
      }
    }
    
    export default Home;