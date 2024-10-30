import { useContext } from "react"
import { Tododata } from "../store/Tododata"

const ItemData = ({todoname,todoprice})=>{

    const {handleDeleteTodo} = useContext(Tododata)

    return   <div className="container  mt-3">
    <div className="row">
    <div className="col-4">
    <span>{todoname}</span>

    </div>
    <div className="col-4">
    <span>{todoprice}</span>

    </div>
    <div className="col-4">
    <span><button className="btn btn-danger" onClick={()=>handleDeleteTodo(todoname)} >Delete</button></span>

    </div>
    
    </div>
</div>

}
export default ItemData