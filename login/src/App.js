import { useState } from "react";

import './App.css'

const App=()=>{

const [a,fname]=useState("")
const [b,lname]=useState("")
const [c,email]=useState("")
const [d,error1]=useState("")
const [f,error2]=useState("")
const [g,error3]=useState("")


const hello=()=>{
    if(a.length===0)
    state.d("First Name is Mandatory")
    else if(b.length===0)
    state.f("Last Name is Mandatory")
    else if(!(c.includes("@")))
    state.g("Please enter correct email id")
    else
    alert("Login Successfull")
}

return(
  <div className="box">
    <h1>Student Login Form</h1><br></br>
    First Name:<input type="text" onChange={(e)=>{fname:e.target.value}}></input><br></br><br></br>
    <p>{state.error1}</p>
    Last Name:<input type="text" onChange={(e)=>{lname:e.target.value}}></input><br></br><br></br>
    <p>{state.error2}</p>
    Email Id:<input type="text" onChange={(e)=>{email:e.target.value}}></input><br></br><br></br>
    <p>{state.error3}</p>
    <button className="btn" onClick={()=>hello()}>Submit</button>
  </div>
    )
}

export default App;