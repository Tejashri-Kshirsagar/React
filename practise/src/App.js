import React, { useState } from 'react';

const App=()=>{

        return(
            <div>
                <h1>HOC</h1>
                <HOCRed cmp={Counter} />
                <HOCGreen cmp={Counter}/>
                <HOCYellow cmp={Counter}/>
            </div>
        )
    }

function HOCRed(props) {
    return <h2 style={{backgroundColor:'red', width:100}}>Red<props.cmp /></h2>
}

function HOCGreen(props) {
    return <h2 style={{backgroundColor:'Green', width:100}}>Green<props.cmp /></h2>
}

function HOCYellow(props) {
    return <h2 style={{backgroundColor:'Yellow', width:100}}>Yellow<props.cmp /></h2>
}

function Counter() {
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )

}


export default App;