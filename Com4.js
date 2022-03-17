import React, { useContext } from 'react'
import { col, UserCOntext } from './App'
function Com4() {
    console.log("Com4 s run");
    
    const day='Sunday'

   const { clr,data,bg,getdata}= useContext(UserCOntext)  // object distraching us naam se jis naam se bheja hai udhar se
  return (
    <div >Com4
    <h1 style={{color:clr,backgroundColor:bg}} >{data}</h1>  // withpoout string
    <button onClick={()=>getdata(day)}>click me</button> // parent me data pass krna 
    </div>
  )
}

export default  React.memo(Com4)  // use for stop rendering 