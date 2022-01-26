import React, { Component } from "react";

class App extends Component{
  constructor(){
    super()
    this.state={
      number:0
    }
  }

  increment(){
      var a=this.state.number

    this.setState({number:a+1})
  }
  decrement(){
    var b=this.state.number

    this.setState({number:b-1})
  }
  render(){
    return(
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
        <button onClick={()=>this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default App;