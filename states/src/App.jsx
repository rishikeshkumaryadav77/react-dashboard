import React, {Component} from "react"
import "./App.css"
import Toggle from "./assets/Task/Toggle"
import Input from "./assets/Task/inputText"
import States from "./assets/Task/States"



export default class App extends Component{
 
  render() {
    return(
      <div>
        {/* <Input />
        <Toggle />
        <h1>Task</h1> */}
        <States />
      </div>
    )
  }
}

