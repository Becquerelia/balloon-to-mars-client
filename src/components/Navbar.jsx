//!IMPORTS:
import logoImg from "../assets/logo-balloon-to-mars.jpg"
import { NavLink } from "react-router-dom"

//!MAIN FUNCTION:
function Navbar() {
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

        <NavLink to="/weather"> 
          {({isActive})=> {
            return <button className={ isActive ? "nav-active" : "nav-unactive" }> Weather in Mars </button>
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
      
    </div>
  )
}

export default Navbar