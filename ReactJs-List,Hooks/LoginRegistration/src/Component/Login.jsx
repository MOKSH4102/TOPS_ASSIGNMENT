import { MdDelete } from "react-icons/md";
const Login = ()=>{

    return <>
    <div className="main">
        <div className="second">
            <div className="text">Login Into My Acccount
            
  <span class="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete />
  </span>
            </div>
            
            <div className="inputtag">
                <div className="div1"><input type="email" placeholder="Enter your Email" ></input></div>
                <div className="div2"><input type="password" placeholder="password"></input></div>
            </div>
            <div className="div3">
                <input type="checkbox" />
                <label > Remember me on This Computer</label></div>
           <div className="button">
            <button>Login</button>
           </div>
           <div className="text1"><p>Forgot Your Password?</p></div>
           <div className="text2"><p>Create A New Account</p></div>
        </div>
    </div>
    </>

}
export default Login