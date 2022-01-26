import { useState } from "react";

const App=()=>{

    const [a,b]=useState("")

    const hello=()=>{
        console.log(a)
    }

    return(
        <div>
            <input type="text" onChange={(e)=>{b(e.target.value)}}></input>
            <button onClick={()=>hello()}>Get</button>
        </div>
    )
}

export default App;