import React, {useEffect, useState} from "react";

const UseEffect=()=>{

    const [count, setCount]=useState(0);
    const changeCount=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        document.title=`chats (${count})`;
    });

    console.log("Outside of UseEffect");
    return(
        <div>
            <h1>{count}</h1>
            <button className="btn" onClick={changeCount}>Click</button>

        </div>
    )
}

export default UseEffect;