import { NavLink } from "react-router-dom"


function ProfileSideBar() {
  return (
    <div>
        <NavLink to="/profile" end> 
          {({isActive})=> {
            return <button className={ isActive ? "nav-active" : "nav-unactive" }> Profile </button>
          }} 
        </NavLink>
        <NavLink to="/profile/my-bookings"> 
          {({isActive})=> {
            return <button className={ isActive ? "nav-active" : "nav-unactive" }> Bookings </button>
          }} 
        </NavLink>
    </div>
  )
}

export default ProfileSideBar