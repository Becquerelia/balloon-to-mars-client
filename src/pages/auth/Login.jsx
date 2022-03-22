//!IMPORTS:
import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom"
//import galleryLettersImg from "../assets/gallery-letters.png";
import {loginService} from "../../services/auth.services.js";

//!MAIN FUNCTION:
function Login(props) {

  const {setIsLoggedIn} = props

  //!CONSTANTS & HOOKS:
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  //!INTERNAL FUNCTIONS:

  const handleIsAdmin = (event) => {setIsAdmin(event.target.checked)}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {email, password}
    try {
      const response = await loginService(user);
      const {authToken} = response.data
      localStorage.setItem("authToken", authToken)
      setIsLoggedIn(true)
        if (isAdmin === true){
          navigate("/profile/admin")        
        } else {
          navigate("/profile")
        }
      }
      
    catch(err){
      if (err?.response?.status === 400) {
        setErrorMessage(err.response.data.errorMessage)
      } else {
        navigate("/error")
      }  
    }    
  }

  //!RENDER VIEW:
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
        <button id="event-btn" >Submit</button>
        <br />
        <p>{errorMessage}</p>

      </form>

        <NavLink to="/signup"> 
          {({isActive})=> {
            return <button className={ isActive ? "nav-active" : "nav-unactive" }> Not registered yet? Sign Up! </button>
          }} 
        </NavLink>
    </div>
  )
}

export default Login