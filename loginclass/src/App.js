import { Component } from 'react';
import React from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      fname:"",
      lname:"",
      email:"",
      error1:"",
      error2:"",
      error3:""
    }
  }

  hello(){
    if(this.state.fname==="")
    {
      this.setState({error1:"First Name is Mandatory"});
    }
    else if(this.state.lname==="")
    {
      this.setState({error2:"Last Name is Mandatory"});
    }
    else if(!this.state.email.includes("@"))
    {
      this.setState({error3:"please enter correct mail id"})
    }
    else
    {
      alert("Login Successfull")
    }
    
  }
   render(){
  return (
    <div className="container">
    <div className="box">
    <h1>Student Login Form</h1><br></br>
    First Name:<input type="text" onChange={(e)=>this.setState({fname:e.target.value})}></input><br></br><br></br>
    <p className="error">{this.state.error1}</p>
    Last Name:<input type="text" onChange={(e)=>this.setState({lname:e.target.value})}></input><br></br><br></br>
    <p className="error">{this.state.error2}</p>
    Email Id:<input type="text" onChange={(e)=>this.setState({email:e.target.value})}></input><br></br><br></br>
    <p className="error">{this.state.error3}</p>
    <button className="btn" onClick={()=>this.hello()}>Login</button>
  </div>
  </div>
  );
}
}

export default App;
