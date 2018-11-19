import React from "react";
import  Title from './Title'

class Home extends React.Component{
    constructor (){
        super();
        this.state={
            'users': [],
            'greeting' : "Hello dude",
            'language' : "Engilish"
        };
      }

       frenchIt() {
         if(this.state.greeting == "Hello dude"){
        this.setState({greeting:"bonjour mon frere"})
         }else{
          this.setState({greeting:"Hello dude"})
         }
      }
      
      changeLanguage(language){
        this.setState({language})
      }
    
    render(){

        return(

          <div>
              <Title changeLanguage ={this.changeLanguage.bind(this)} ref={this.state.greeting} language={this.state.language} />
               <div>
                   <h1>{this.state.greeting}</h1>
              </div>
              
                                      
              <input type="button"  onClick={this.frenchIt.bind(this)}/>

              <div>

                  <p>A 3ataay</p>
              </div>    
          </div>    
          
        )
      }
    }
    
    export default Home;