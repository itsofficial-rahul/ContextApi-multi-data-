import React, { useRef } from 'react'

export function RefF() {
const inputRef=useRef()
function get()
{
    console.log(inputRef.current.value)
    inputRef.current.style.display="none"  //  direct css updet
    inputRef.current.style.backgroundColor="red"
    console.log(inputRef.current.style)
}
  return (
    <div>RefF
    
    
    
    <input type="text" ref={inputRef}></input>
    
    <button onClick={()=>get()}>clickme</button>
    
    </div>
  )
}
