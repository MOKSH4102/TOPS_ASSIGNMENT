import { useState } from "react"

const App = ()=>{

  let [count,setcount] = useState(0)

  const increment = ()=>{
    setcount(count+1)
  }
  const decrement = ()=>{
    if(count>0){
      setcount(count-1)
    }
  }
return <center>
  <h1 className="mt-5"> Counter App</h1>
  <span className="mb-5">{count}</span>
  <div>
  <button className="btn btn-success mx-3 my-3 " onClick={increment}>Increment</button>
  <button className="btn btn-danger mx-3 my-3" onClick={decrement}>Decrement</button>
  </div>
</center>
}
export default App 