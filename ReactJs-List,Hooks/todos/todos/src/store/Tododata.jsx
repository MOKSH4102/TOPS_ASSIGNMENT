import { createContext,useReducer } from "react";
export  const Tododata =  createContext([])

const todoreducer = (todolist,action) => {

    let newArray = todolist
  
    if(action.type == "addItem"){
      newArray = [...todolist,{name:action.name,price:action.price}]
    }
    else if(action.type == "removeItem"){
      newArray = todolist.filter((e) => e.name!= action.name);
    }
  
    return newArray
  
  }

const Tododatas = (props)=>{

    const [todolist, dispatchertodo] = useReducer(todoreducer,[])
  

 

  const addItemHandler = (name,price)=>{
    
    const addItem = {
      type : "addItem",
      name : name,
      price : price
    }
    dispatchertodo(addItem)
      // const newArray = [...todolist,{name:name,price:price}]
      // settodolist(newArray)
  }
  const handleDeleteTodo = (name) => {
    // const newTodos = todolist.filter((e) => e.name != name);
    // settodolist(newTodos);
    const removeItem = {
      type : "removeItem",
      name : name
    }
    dispatchertodo(removeItem)
  };

      return <>
      <Tododata.Provider value = {{todolist,addItemHandler,handleDeleteTodo }}>
      {props.children}
      </Tododata.Provider>
      </>
}

export default Tododatas
