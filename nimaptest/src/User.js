import React,{useState} from "react";
function User() {

   const [username,setUsername]=useState("")
   const [e1,setE1]=useState("")
   const [pswd,setPswd]=useState("")
   const [e2,setE2]=useState("")
   const Login=()=>{

     if(username==="") {
        setE1("User Name is mendetory")

     } else if(!pswd.includes("*")) {

        setE2("Password Must Have *")

     }else {

        alert("Login Successfully..........")

     }
   }
   function Change_Password() {
     alert("Password Changed...")
   }
    return(
        <div className="login">
            <h1 className="head">Login</h1>
            <label className="lbl" id="username">User Name:</label>
            <input className="txt" type="text" onChange={(e)=>{setUsername(e.target.value)}}></input><br></br>
            <p className="eMsg">{e1}</p>
            <label className="lbl" id="pswd">Password:</label>
            <input className="password" type="password" onChange={(e)=>{setPswd(e.target.value)}}></input><br></br>
            <p className="eMsg">{e2}</p>
            <button className="btn" onClick={()=>Change_Password()}>Change Password</button>
            <button className="btn" onClick={()=>Login()}>Login</button>
        </div>
    )
}
export default User;