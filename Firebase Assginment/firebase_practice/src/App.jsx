import React, { useEffect } from 'react'
import {getDatabase, set,ref} from 'firebase/database'

import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from './firestore-config'

// const database = getDatabase(app)
const App = () => {
const userDBref = collection(db,"users")
const clickbutton = ()=>{
  addDoc(userDBref,{"name": "jay", "email": "jay@gmail.com","age":"22"})
}

useEffect(()=>{
  viewuser()
},[])

const viewuser = async()=>{
  const result = await getDocs(collection(db,"users"))
  result.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
}
  // const clickbutton = ()=>{
  //   set(ref(database,'tops/users'),{
  //     name: 'John Doe',
  //     age: 25,
  //     email: 'johndoe@example.com'
  //   })
    
  // }
  return (
    <div>
      <button onClick={clickbutton()}>click here</button>
    </div>
  )
}

export default App
