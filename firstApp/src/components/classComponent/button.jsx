import React, { Component } from "react";
import { Heading2 } from "../heading/heading";

class ButtonComponentClass extends Component{
state ={
  text1:"subscribe",
  text2: "subscribed",
  isSubscribed:false
}

buttonHandler = () =>{
  this.setState({isSubscribed:!this.state.isSubscribed})
}


  render(){
    return(
      <>
      <button onClick={this.buttonHandler}>{this.state.isSubscribed ? this.state.text2 : this.state.text1}</button>
      {
        this.state.isSubscribed ? ( <h2> now U can enjoy primium content</h2> ) : ( <h2>subscribe for primium content</h2> )
      }
      </>
    )
  }
}

export default ButtonComponentClass;
