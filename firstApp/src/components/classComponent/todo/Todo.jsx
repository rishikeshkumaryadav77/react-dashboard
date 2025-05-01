import { Component } from "react";

class TodoComponent extends Component{
  state = {
    todo :['wake up at 7am', 'eat breakfast at 8:00Am'],
  }
  render(){
    return(
      <>
      <h2>LIST OF TODOS</h2>
      <ol>
        
        {this.state.todo.map((eachtodo) => { 
        return <li>{eachtodo}</li>
      })}
        
      </ol>
      
      
      </>
    )
  }
}

export default TodoComponent