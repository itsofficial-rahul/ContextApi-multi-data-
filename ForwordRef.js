import React from 'react'

function ForwordRef(props) {
    console.log(props);
  return (
    <div>ForwordRef
    <input type="text" ref={props.foref} ></input>
    </div>
  )
}

export default ForwordRef