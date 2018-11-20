import React, { Component } from "react";

import  Title from './Title'

class Calendar extends Component{
    constructor (){
        super();
        this.state={
            
            'tasks' : [
                {'id':1, 'name':"eat", 'des':"put food in stomach"},{'id':2, 'name':"run", 'des':"walk fast"},{'id':3, 'name':"devlope", 'des':"build apps"}
            ],
            'language' : "Engilish",
            'counter' : 0,
        };
      }


      handelSubmit(newTask){
        var NewTasks = this.state.tasks;
        this.setState({
            tasks: NewTasks.push(newTask)
        })
      }

      inrimentCounter(){
        var pre = this.state.counter +1
        this.setState({
            counter: pre
               
        })
      }
   
    render(){

        return (
            <div>
                
            <App tasks={this.state.tasks} handelSubmit={this.handelSubmit.bind(this)} />
            
            <h3>{this.state.counter}</h3>
            <button onClick={this.inrimentCounter.bind(this)}>+</button>

            </div>
              
        )
        
      }
    }
 
    class App extends Component{
        constructor (props){
            super(props);
            this.state={
               
                'name'  : "",
                'des'   :"",
                'tasks' : this.props.tasks
            };
          }
    
           
        _handelName(event){
            this.setState({
             name : event.target.value
            })
        }
        _handelDescrip(event){
            this.setState({
             des : event.target.value
            })
        }
        addTask(){
            const newTask = {
                id: Date.now(),
                name: this.state.name,
                des : this.state.des

            };
            this.props.handelSubmit(newTask);
            console.log(this.state.tasks);
            this.setState({
                name : "",
                des : "",
            })
            
        }
        render(){
    
           return(
         <div>
                         <ul >
            {this.state.tasks.map((task)=>{
               
                
               return <li key={task.id}> {task.name} : {task.des}</li>
            })}    
            </ul>
              <h1>
                 {this.state.name}
              </h1>
                <input placeholder="Name" value={this.state.name} onChange={this._handelName.bind(this)}/>
                <input placeholder="Description" value={this.state.des} onChange={this._handelDescrip.bind(this)}/>
                <button onClick={this.addTask.bind(this)}>Add</button>
          </div> 
           )
    
                  
            
            
          }
        }
     

    export default Calendar;