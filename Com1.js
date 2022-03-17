import React, { useMemo } from 'react'
import Com2 from './Com2'

 function Com1() {
    
    console.log("Com1 is runn")
  return (
    <div>Com1
    
    <Com2/>
    
    
    </div>
  )
}
export default React.memo(Com1)  // use for stop rendering 