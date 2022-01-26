import React, { Component } from "react";

class App extends Component{
  constructor(){
    super()
    this.state={
      name:"Sachin"
    }
  }

  hello=()=>{
      this.setState({name:"Ganesh"})
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.hello()}>Update State</button>    
      </div>
  )
  }
}

export default App;