//!IMPORTS:
import logoImg from "../assets/logo-balloon-to-mars.jpg"
import { NavLink } from "react-router-dom"

//!MAIN FUNCTION:
function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark">

      <img src={logoImg} alt="Logo" width="350rem" />

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

      <NavLink to="/another-places"> 
        {({isActive})=> {
          return <button className={ isActive ? "nav-active" : "nav-unactive" }> Another Places </button>
        }} 
      </NavLink>

      <NavLink to="/astronomical-events"> 
        {({isActive})=> {
          return <button id="btn-right" className={ isActive ? "nav-active" : "nav-unactive" }> Astronomical Events </button>
        }} 
      </NavLink>

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
  )
}

export default Navbar