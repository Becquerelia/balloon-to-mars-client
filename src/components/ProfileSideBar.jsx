import { NavLink } from "react-router-dom"
import profileImg from "../assets/profileIcon.png"


function ProfileSideBar() {
  return (
    <div className="side-bar" >
        <NavLink to="/profile" end > 
          {({isActive})=> {
            return (
              <div>
                <button id="sidebar-btn" className={ isActive ? "nav-active" : "nav-unactive" }> Profile </button>               
              </div>
            )
          }} 
        </NavLink>
        <NavLink to="/profile/my-bookings"> 
          {({isActive})=> {
            return <button id="sidebar-btn" className={ isActive ? "nav-active" : "nav-unactive" }> Bookings </button>
          }} 
        </NavLink>
    </div>
  )
}

export default ProfileSideBar