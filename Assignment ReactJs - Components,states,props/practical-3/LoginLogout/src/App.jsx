import './App.css'
import { useState } from "react"

const App = ()=>{

  let [LoginIn,setLoginIn] = useState()

  const handleLogin = () => {
    setLoginIn(!LoginIn)
  }

    return <div className="container box1">
      <div className='box2'><span className='text'> Navigation</span>
      <button onClick={handleLogin} className='btn btn-secondary'>{LoginIn?'Logout':'Login'}</button></div>
      
      <div className='view'>{LoginIn?<span>Private Views</span>:<span>Public Views</span>}</div>
      <footer className='footer'>Footer</footer>
    </div>
  
}

export default App