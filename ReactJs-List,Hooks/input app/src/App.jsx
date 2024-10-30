import Heading from "./Components/Heading"
import Input from "./Components/Input"
import TextButton from "./Components/TextButton"
import React, { useState } from 'react'

function App(){

  let [fdata,setftdata] = useState([])
  


    function keyPressHandle(e){
        if(e.key=='Enter')
        {
          
          const newData = e.target.value;
          const newarr = [...fdata,newData]
          setftdata(newarr)
          e.target.value = ''
        }
        
    }


    

      
    
  return <>
  <center className="container">

  <Heading></Heading>
  <Input keyhandle = {keyPressHandle} value={fdata}/>
  <TextButton fooddata= {fdata} />
  </center>
  </>
}
export default App