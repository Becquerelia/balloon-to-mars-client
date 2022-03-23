import {useNavigate, NavLink } from "react-router-dom"


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
        <NavLink to="/profile/my-bookings" end> 
          {({isActive})=> {
            return <button id="sidebar-btn" className={ isActive ? "nav-active" : "nav-unactive" }> Bookings </button>
          }} 
        </NavLink>
        <NavLink to={`/profile/update-account`} end> 
          {({isActive})=> {
            return <button id="sidebar-btn" className={ isActive ? "nav-active" : "nav-unactive" }> Edit User </button>
          }} 
        </NavLink>
        <NavLink to="/profile/delete-account" end> 
          {({isActive})=> {
            return <button id="sidebar-btn" className={ isActive ? "nav-active" : "nav-unactive" }> Delete Account </button>
          }} 
        </NavLink>
    </div>
  )
}

export default ProfileSideBar