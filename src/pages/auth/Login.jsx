//!IMPORTS:
import {useState} from "react";
import {useNavigate} from "react-router-dom"
//import galleryLettersImg from "../assets/gallery-letters.png";
import {loginService} from "../../services/auth.services.js";

//!MAIN FUNCTION:
function Login() {

  //!CONSTANTS & HOOKS:
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  //!INTERNAL FUNCTIONS:
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {email, password}
    try {
      const response = await loginService(user);
      const {authToken} = response.data
      localStorage.setItem("authToken", authToken)
      navigate("/")
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
        value={email}
        onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)} />
        <br />        
        <button>Submit</button>
        <br />
        <p>{errorMessage}</p>

      </form>
    </div>
  )
}

export default Login