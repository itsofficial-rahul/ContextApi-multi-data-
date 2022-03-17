import React, { useRef } from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
function Uncontrooled() 
{
    const a=useRef()
    const b=useRef()
    function abc()
    {
        if(a.current.value.length<3)
        {
         alert("data less than 3")

        }
        else{
        console.log(a.current.value)
        console.log(b.current.value)
        }
    }
    return(
        <div>
       <h1>Uncontrolled Component ...</h1>
      Name :   <input type="text" ref={a}  /><br></br><br></br>
      Pass :   <input type="text" ref={b} ></input>
        <br></br><br></br>
        <Button style={{marginLeft:"80px"}}  onClick={()=>abc()} variant="contained" color="success">
        submit
      </Button>
        </div>
    )
}
export default Uncontrooled