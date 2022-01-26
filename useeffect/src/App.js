import React from 'react'
import {useState,useEffect} from 'react'

function App() {
  const[a,b]=useState(0)
  const increase=()=>{
    b(a+1)
  }
  useEffect(()=>{
    console.log("useEffect Called")
  })
  
  return(
    <div>
      <h1>{a}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
export default App;