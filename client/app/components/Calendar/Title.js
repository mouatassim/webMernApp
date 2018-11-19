import React from "react";


class Title extends React.Component{
    
    
    render(){
        if(this.props.ref == "Hello dude"){
            this.props.changeLanguage("English")
        }else{
            this.props.changeLanguage("French")
        }
        

        
        return(

          <h1>{this.props.language}</h1>
          
        )
      }
    }
    
    export default Title;