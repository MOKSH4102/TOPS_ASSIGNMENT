import { useContext, useEffect, useRef } from "react"
import { Tododata } from "../store/Tododata"

const Data = ()=>{

   
    const {addItemHandler} = useContext(Tododata)

    let nameref = useRef()
    let priceRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        addItemHandler(nameref.current.value, priceRef.current.value)
        nameref.current.value = ''
        priceRef.current.value = ''
    }

    return <>
<form action="" onSubmit={handleSubmit}>
    <div className='container  mt-3'>
        <div className='row'>
            <div className='col-4'> 
        <input type="text" placeholder="Enter your SubScription" className='form-control' ref={nameref}></input>
        </div>
        <div className='col-4'> 
        <input type="number" className='form-control' placeholder="Enter the Price" ref={priceRef}/>
        </div>

        <div className='col-4'> 
        <button className="btn btn-primary" >Add</button>
        </div>
        </div>
    </div>
</form>
    </>
}
export default Data