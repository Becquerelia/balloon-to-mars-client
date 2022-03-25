//!IMPORTS:
import { NavLink } from "react-router-dom"

//!MAIN FUNCTION:
function AdminSideBar() {

  //RENDER VIEW: 
  return (
    <div className="side-bar" >

        <NavLink to="/profile/admin" end > 
          {({isActive})=> {
            return (
              <div>
                <button id="sidebar-btn" className={ isActive ? "nav-active" : "nav-unactive" }> Profile </button>               
              </div>
            )
          }} 
        </NavLink>

        <NavLink to="/profile/admin/all-bookings"> 
          {({isActive})=> {
            return <button id="sidebar-btn" className={ isActive ? "nav-active" : "nav-unactive" }> Bookings </button>
          }} 
        </NavLink>
        
    </div>
  )
}

export default AdminSideBar