import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'

const App = () => {
  const [users, setusers] = useState()

  const loadcurrentUSer = async () => {
    await auth.onAuthStateChanged((user) => {
      setusers(user)
    })
  }

  useEffect(() => {
    loadcurrentUSer()
  }, [])

  return <>
    {users ? <Home></Home> : <Login></Login>}
  </>
}

export default App
