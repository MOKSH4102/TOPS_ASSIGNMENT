import { useContext } from "react"
import { Tododata } from "../store/Tododata"
import ItemData from "./ItemData"

const Item = ()=>{

    const {todolist} = useContext(Tododata)
    return <>
    {todolist.map((item)=><ItemData
        todoname = {item.name} todoprice = {item.price}>
    </ItemData>)}
    </>

}
export default Item