import React, { useEffect, useState } from 'react'

function Effect() {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        console.log("effect 1 is update",count)
    })  // update (run in every udate)
    useEffect(()=>{
        console.log("effect 2 is mount",count)
    },[]) // Mount (ek hi baar)
    useEffect(()=>{
        console.log("effect 3 is condition based",count)
    },[count>5])  // condtion pr (will unmount)
  return (
    <div>Effect
    <h3>use effect hook ....  {count}</h3>
    
    <button onClick={()=>setcount(count+1)}>click me</button>
    
    </div>
  )
}

export default Effect