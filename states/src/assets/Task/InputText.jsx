import {Component} from "react"

class Input extends Component{
  constructor(){
    super()
    this.state = {
      inputText : ""
    }
  }
  handleToggle = (e) => {
    console.log(e.target.value)
    this.setState({inputText : e.target.value})
  }
  render() {
    return(
      <div>
        <h3>{this.state.inputText}</h3>
        <input type="text" placeholder="type something.." onChange={this.handleToggle} />
      </div>
    )
  }
}

export default Input; 