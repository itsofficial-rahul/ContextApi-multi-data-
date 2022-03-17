import React, { useEffect, useState } from 'react'

function Effect2() {
    const[data,setdata]=useState(2)
    const[count,setcount]=useState(9)
    useEffect(()=>{
        console.log("data is update")
    },[data])  // only run when data is update
    useEffect(()=>{
        console.log("count is update")
    },[count])  // only run when count is update 
   useEffect(() => {
     console.log("run every time");
   }) // run on every update 
   
  return (
    <div>Effect2
    <h1>data = {data}</h1>
    <h1>count = {count}</h1>
    <button onClick={()=>setdata(data+2)}>data</button>
    <button onClick={()=>setcount(count+2)}>count</button>
    </div>
  )
}

export default Effect2