import React from 'react'
import { useState } from 'react'

function useDecrement() {
    const[a,b]=useState(10)
    const Decrement=()=>{
        b(a-1)
    }
    return{
        a,
        Decrement
    }
}

export default useDecrement;