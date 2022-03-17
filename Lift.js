import React, { useState } from 'react'

function Lift(props) {
    const[data,setdata]=useState("webdeveloper")
    console.log(props)
  return (
    <div>
      <button onClick={()=>props.pa(data)} >click me</button>
    </div>
  )
}

export default Lift