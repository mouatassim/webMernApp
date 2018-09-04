import React from "react";
import Signin from './../Login/Signin'



class HeaderVisitor extends React.Component{
    
    render(){

        return(
      
        <div className="header">
            <div className="headerTitel">
            <img src="./peace.png"/>
                <h1>Soft touch</h1>
            </div>
            
                <Signin />
            
        </div>

         
        )
      }
    }
    
    export default HeaderVisitor;