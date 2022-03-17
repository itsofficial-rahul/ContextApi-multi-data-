import React from 'react'

function Hoc() {
  return (
    <div><h3>High Order Component</h3>
    <HocGreen  Home={Home}/>
   <img style={{height:"60px",marginLeft:"650px"}} src='https://pngimg.com/uploads/chakra/chakra_PNG49.png' ></img>
    <Hocgreen2  About={About}/>
    
    </div>
  )
}
function HocGreen(prop) {
    return (
        <div>
<h1 style={{backgroundColor:"orange"}}><prop.Home /></h1>
   

</div>
    )
    
}
function  Hocgreen2(props) {
    return(
    <h1 style={{backgroundColor:"green"}}><props.About /></h1>
    )
}
function Home(args) {
    return (
        <div>
        Home is called
        </div>
        
    )
}
function About(args) {
    return (
       <div>
        About is called
        </div>
    )
}

export default Hoc