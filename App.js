import './App.css';
import React, { Component ,useMemo,createContext,createRef, useContext, useEffect, useRef, useState} from 'react'
import Com1 from './Com1';
export const UserCOntext=createContext()

function App()
{
  // multiple state send bysingle provider ) 
  function getdata(item)  // ye data chiled se aarha hai com4 se
  {
     setitem(item)
  }
  const [item,setitem] =useState()
    const [data,setdata]=useState(0)
    const [color,setcolor]=useState('red')
    const [backgroundColor,setbackgroundColor]=useState("green")
    return(
        <div>
       <UserCOntext.Provider value={{clr:color,data:data,bg:backgroundColor,getdata:getdata}}>  
        <Com1 />
        <h1>{item}</h1>
        <button onClick={()=>setdata(data+1)}>update</button>
        </UserCOntext.Provider>
                </div>
    )
}
export default React.memo(App)  // use for stop rendering 
