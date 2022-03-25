//!IMPORTS:
import logoImg from "../assets/logo-balloon-to-mars.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import {useContext} from "react";
import {LoggedUserContext} from "../context/loggedUser.context.js";

//!MAIN FUNCTION:
function Navbar() {

  //CONSTANTS & HOOKS:
  const {isLoggedIn, setIsLoggedIn} = useContext(LoggedUserContext)
  const navigate = useNavigate()

  //FUNCTION TO LOG OUT:
  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  //RENDER VIEW:
  return (
    <div className="navbar">
      <div>
        <img src={logoImg} alt="Logo" width="300rem" />
      </div>
      
      <div className="aline-navbar" >      
        <NavLink to="/"> 
          {({isActive})=> {
            return <button id="btn-left" className={ isActive ? "nav-active" : "nav-unactive" }> Home </button>
          }} 
        </NavLink>

        <NavLink to="/observatory"> 
          {({isActive})=> {
            return <button className={ isActive ? "nav-active" : "nav-unactive" }> Observatory </button>
          }} 
        </NavLink>

        <NavLink to="/image-gallery"> 
          {({isActive})=> {
             return <button className={ isActive ? "nav-active" : "nav-unactive" }> Gallery </button>
          }} 
        </NavLink>

        <NavLink to="/pic-of-the-day"> 
          {({isActive})=> {
            return <button className={ isActive ? "nav-active" : "nav-unactive" }> Pic of the Day </button>
          }} 
        </NavLink>

        <NavLink to="/astronomical-events"> 
          {({isActive})=> {
            return <button id="btn-right" className={ isActive ? "nav-active" : "nav-unactive" }> Astronomical Events </button>
          }} 
        </NavLink>

      </div>

       {!isLoggedIn && 
          <div>
            <NavLink to="/login"> 
              {({isActive})=> {
                return <button id="btn-left" className={ isActive ? "nav-active" : "nav-unactive" }> Log In </button>
              }} 
            </NavLink>

            <NavLink to="/signup"> 
              {({isActive})=> {
                return <button id="btn-right" className={ isActive ? "nav-active" : "nav-unactive" }> Sign Up </button>
              }} 
            </NavLink>
          </div>
        }

        {isLoggedIn && 
          <div>
            <NavLink to="/profile"> 
              {({isActive})=> {
                return <button id="btn-left" className={ isActive ? "nav-active" : "nav-unactive" }> Profile </button>
              }} 
            </NavLink>

            <button id="btn-right" onClick={handleLogOut} > Log Out </button>
            
          </div>
        }    
           
    </div>
  )
}

export default Navbar