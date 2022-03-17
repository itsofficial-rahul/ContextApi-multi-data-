import React from 'react'
import Com4 from './Com4'
function Com3() {
    console.log("Com3 is runn")
  return (
    <div>Com3
    
    <Com4 />
    
    
    </div>
  )
}

export default React.memo(Com3)  // use for stop rendering 