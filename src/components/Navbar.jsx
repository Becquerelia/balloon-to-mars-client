import logoImg from "../assets/logo-balloon-to-mars.jpg"
import { NavLink } from "react-router-dom"


function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark">
     <div className="container-fluid">       
       <img src={logoImg} alt="Logo" width="350rem" className="navbar-brand logo" />
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button> 
       <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/"> 
                {({isActive})=> {
                  return <button id="btn-left" className={ isActive ? "nav-active" : "nav-unactive" }> Home </button>
                }} 
              </NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to="/weather"> 
                {({isActive})=> {
                  return <button className={ isActive ? "nav-active" : "nav-unactive" }> Weather in Mars </button>
                }} 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/image-gallery"> 
                {({isActive})=> {
                  return <button className={ isActive ? "nav-active" : "nav-unactive" }> Gallery </button>
                }} 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/another-places"> 
                {({isActive})=> {
                  return <button className={ isActive ? "nav-active" : "nav-unactive" }> Another Places </button>
                }} 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/astronomical-events"> 
                {({isActive})=> {
                  return <button id="btn-right" className={ isActive ? "nav-active" : "nav-unactive" }> Astronomic Events </button>
                }} 
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/login"> 
                {({isActive})=> {
                  return <button id="btn-left" className={ isActive ? "nav-active" : "nav-unactive" }> Log In </button>
                }} 
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/signup"> 
                {({isActive})=> {
                  return <button id="btn-right" className={ isActive ? "nav-active" : "nav-unactive" }> Sign Up </button>
                }} 
              </NavLink>
            </li>        
          </ul>           
        </div>        
      </div> 
    </div>
  )
}

export default Navbar