//!IMPORTS:
import {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom"
//import galleryLettersImg from "../assets/gallery-letters.png";
import {signupService} from "../../services/auth.services.js";
import {sendEmailService} from "../../services/sendemail.services"

//!MAIN FUNCTION:
function Signup() {

  //!CONSTANTS & HOOKS:
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  //!INTERNAL FUNCTIONS:
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {username, email, password, country, city}
    try {
      await signupService(user);
      await sendEmailService();
      navigate("/login")
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
        type="text" 
        name="username" 
        placeholder="Username"
        className="usernameInput"
        value={username}
        onChange={(e)=> setUsername(e.target.value)} />
        <br />
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
        <input 
        type="text" 
        name="country" 
        placeholder="Your country"
        className="countryInput" 
        value={country}
        onChange={(e)=> setCountry(e.target.value)} />
        <br />
        <input 
        type="text" 
        name="city" 
        placeholder="Your city"
        className="cityInput" 
        value={city}
        onChange={(e)=> setCity(e.target.value)} />
        <br />
        <h4>You will receive an email to confirm the register when you press the button</h4>
        <br />
        <button id="event-btn" >Submit</button>
        <br />
        <p>{errorMessage}</p>

      </form>

      <NavLink to="/login"> 
          {({isActive})=> {
            return <button className={ isActive ? "nav-active" : "nav-unactive" }> Already registered? Log In! </button>
          }} 
      </NavLink>
    </div>
  )
}

export default Signup