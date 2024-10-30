

const  Input = ({keyhandle})=>{

    
    return <input type="text" placeholder="Enter Food Item" className="form-control m-3" onKeyUp={keyhandle} ></input>
}
export default Input