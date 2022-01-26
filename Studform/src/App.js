import { useState } from "react";

import './form.css'

const App=()=>{

const [a,fname]=useState("")
const [b,lname]=useState("")
const [c,add]=useState("")
const [d,gen]=useState("")
const [f,dob]=useState("")
const [g,phone]=useState("")
const [h,email]=useState("")

const hello=()=>{
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(f)
    console.log(g)
    console.log(h)
}
    return(
      <div className="box">
        <h1>Student Registration Form</h1><br></br>
        First Name:<input type="text" onChange={(e)=>{fname(e.target.value)}}></input><br></br><br></br>
        Last Name:<input type="text" onChange={(e)=>{lname(e.target.value)}}></input><br></br><br></br>
        Address:<input type="text" onChange={(e)=>{add(e.target.value)}}></input><br></br><br></br>
        Gender:<input type="text" onChange={(e)=>gen(e.target.value)}></input><br></br><br></br>
        Birth Date:<input type="text" onChange={(e)=>dob(e.target.value)}></input><br></br><br></br>
        Phone No.:<input type="text" onChange={(e)=>{phone(e.target.value)}}></input><br></br><br></br>
        Email Id:<input type="text" onChange={(e)=>{email(e.target.value)}}></input><br></br><br></br>
        <button className="btn" onClick={()=>hello()}>Submit</button>
        </div>
    )
}

export default App;