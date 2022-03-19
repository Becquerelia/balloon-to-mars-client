//!IMPORTS:
import {useState, useEffect} from "react";
//import galleryLettersImg from "../assets/gallery-letters.png";
import {loginService} from "../../services/auth.services.js";

//!MAIN FUNCTION:
function Login() {

  //!CONSTANTS & HOOKS:
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //!INTERNAL FUNCTIONS:
  const handleSubmit = (e) => {
    e.preventDefault()
    
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

      </form>
    </div>
  )
}

export default Login