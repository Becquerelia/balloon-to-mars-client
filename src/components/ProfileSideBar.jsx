import { NavLink } from "react-router-dom"


function ProfileSideBar() {
  return (
    <div>
        <NavLink to="/"> 
          {({isActive})=> {
            return <button id="btn-left" className={ isActive ? "nav-active" : "nav-unactive" }> Home </button>
          }} 
        </NavLink>
    </div>
  )
}

export default ProfileSideBar