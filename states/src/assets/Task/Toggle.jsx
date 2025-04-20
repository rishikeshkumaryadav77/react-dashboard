import {Component} from "react"

class Toggle extends Component{
  constructor(){
    super()
    this.state = {
      isToggle : true
    }
  }
  handleToggle = () => {
    // console.log("Toggle Trigered")
    this.setState({isToggle : !this.state.isToggle})
  }
  render() {
    return(
      <div>
<button onClick={this.handleToggle}>{this.state.isToggle ? "On" : "Off"}</button>
      </div>
    )
  }
}

export default Toggle; 