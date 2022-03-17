
import { Component, useState } from 'react';
import './App.css';



function Toggle() {
  const [data,setdata]=useState()
  const [name,setname]=useState(false)
 
return(
  <div>
  <input type="text" onChange={(e)=>setdata(e.target.value)} ></input>
  {
    name?<h5>{data}</h5>:null
  }
  <button onClick={()=>setname(true)} >show</button>
  <button onClick={()=>setname(false)} >hide</button>
  <button onClick={()=>setname(!name)} >togggle</button>
  </div>
)
}

export default Toggle;
