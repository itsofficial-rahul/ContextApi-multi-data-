import React from 'react'
import { useState } from 'react'

export function Form() {
    const [name,setname] =useState('')
    const [gen,setgen]  =useState('')
    const [sub,setsub] =useState("choose")
  function submited(e)
  {
      alert("Data submit successfully")
    console.log(name,gen,sub)
    setname('')
    setgen('')
    setsub('')
    e.preventDefault()
  }
  return (
    <div>
    <form onSubmit={(e)=>submited(e)}>
    <fieldset style={{margin:"200px" ,padding:"50px"}}>
    <legend>Your Data</legend> 
    <label for="name">name : &nbsp;</label>
    <input type="text" id="name"  onChange={(e)=>setname(e.target.value)} value={name} ></input> <br></br><br></br>
    <label>gender : </label>
    <input type="radio" name='gender' value={gen} id='male' value="male" onChange={(e)=>setgen(e.target.value)} ></input><label for="male" >Male</label>
    <input type="radio" name='gender'  value={gen} id='female' value="female" onChange={(e)=>setgen(e.target.value)} ></input><label  for="female">Female</label>  <br></br><br></br>
    <label>subject : &nbsp;</label>
    <select value={sub} onChange={(e)=>setsub(e.target.value)}> 
   <optgroup label='10th'>
      <option>science</option>
      <option>econimics</option>
      </optgroup>
      <optgroup label='12th' >
     <option>Maths</option>
     <option>Bio</option>
     <option>Commers</option>
     <option>B.com</option>
     </optgroup>
    </select><br></br> <br></br>
    <input type="submit" ></input>&nbsp;&nbsp;  
    <input type="reset" ></input>
    </fieldset>
    </form> 
    </div>
  )
}
