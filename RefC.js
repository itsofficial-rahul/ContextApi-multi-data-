

import './App.css';
import React, { Component ,createRef} from 'react'

class RefC extends React.Component{
    constructor()
    {
        super()
        this.inputref=React.createRef()
        this.inref=React.createRef()
    }
    // componentDidMount()
    // {
    //     console.log(this.inputref.current.value=5000)
    // }
    get()
    {
        console.log(this.inref.current.value)
       this.inref.current.style.color="black"
       this.inref.current.focus()
       this.inref.current.style.backgroundColor="green"
    }
    render()
    {
        return(
            <div>

<input type="text" ref={this.inputref} ref={this.inref}></input>
<button onClick={()=>this.get()} >click me</button>


            </div>
        )
    }
}
export default RefC;
