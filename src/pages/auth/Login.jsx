//!IMPORTS:
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {loginService} from "../../services/auth.services.js";
import {verifyService} from "../../services/auth.services";

//!MAIN FUNCTION:
function Login(props) {
  
  //CONSTANTS & HOOKS:
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const {setIsLoggedIn} = props
  const navigate = useNavigate()

  const errorMessageColor = {
    color:"red"
  }

  //!INTERNAL FUNCTIONS:

  //HANDLE FUNCTION FOR ADMIN CHECKBOX:
  const handleIsAdmin = (event) => {setIsAdmin(event.target.checked)}

  //FUNCTION TO GET TOKEN AND LOGIN:
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {email, password}
    try {
      const response = await loginService(user);
      const {authToken} = response.data
      localStorage.setItem("authToken", authToken)
      setIsLoggedIn(true)
      const responseVerify = await verifyService()
      //verifyUser()
        if (isAdmin === true && responseVerify.data.adminRole === "admin"){
          navigate("/profile/admin")        
        } else {
          navigate("/profile")
        }
      }
      
    catch(err){
      if (err?.response?.status === 400 || err?.response?.status === 401) {
        setErrorMessage(err.response.data.errorMessage)
      } else {
        navigate("/error")
      }  
    }    
  }

  //RENDER VIEW:
  return (
    <div>
      <form onSubmit={handleSubmit} >
                
        <input 
        type="email" 
        name="email" 
        placeholder="Email"
        className="emailInput" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <input 
        type="password" 
        name="password" 
        placeholder="Password"
        className="passwordInput" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)} />
        <br />
        <div className="isAdminCheckBox" >
          <label htmlFor="isAdmin">Admin?</label> 
          <input type="checkbox" name="isAdmin" checked={isAdmin} onChange={handleIsAdmin} />
        </div>
        
        <br />
        <p style={errorMessageColor}>{errorMessage}</p>
        <br />        
        <button id="event-btn" >Submit</button>
        <br />

      </form>

        <NavLink to="/signup"><button className="toLog-toSignup-btn"> Not registered yet? Sign Up! </button></NavLink>
    </div>
  )
}

export default Login