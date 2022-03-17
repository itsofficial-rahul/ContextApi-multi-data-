import React, { useMemo, useState } from 'react'

function Memo() {
  const [data,setdata]=useState(0)
  const [item,setitem]=useState(10)
  const multiCountMemo=useMemo((function multi(args) {
    console.log("multi is Called")
    return data*5
  }),[data])
  return (
    <div>Memo
    
    
    <h1>data: {data}</h1>
    <h1>item : {item}</h1>
    <h1>{multiCountMemo}</h1>
    <button onClick={()=>setdata(data+1)}>update data</button>
    <button onClick={()=>setitem(item*2)}>update item</button>
    </div>
  )
}

export default Memo