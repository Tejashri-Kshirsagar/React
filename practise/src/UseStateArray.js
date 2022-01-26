import React from "react"

const UseStateArray=()=>{
    const bioData=[
        {name:"Teju", Age:21},
        {name:"Ajit", Age:26}
    ]
    return(
        <>
        {
        bioData.map((curEle)=> <h1>Name: {curEle.name} Age: {curEle.Age}</h1>)
        }  
        </>
    )
}

export default UseStateArray;