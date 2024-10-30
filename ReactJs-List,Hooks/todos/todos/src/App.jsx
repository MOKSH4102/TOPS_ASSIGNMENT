import Data from "./Components/Data"
import Title from "./Components/Title"
import { useState , useEffect, useReducer} from "react"
import Tododatas, { Tododata } from "./store/Tododata"
import Item from "./Components/Item"


const App =()=>{

 
    return <center>
      <Tododatas>
      <Title/>
      <Data/>
      <Item/>
      </Tododatas>
    </center>
}
export default App