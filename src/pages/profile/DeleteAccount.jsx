//!IMPORTS:
import ProfileSideBar from "../../components/ProfileSideBar"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import {deleteUserService} from "../../services/profile.services"
import {LoggedUserContext} from "../../context/loggedUser.context.js"

//!MAIN FUNCTION:
function DeleteAccount() {
  
  //CONSTANTS & HOOKS:
  const {setIsLoggedIn} = useContext(LoggedUserContext)
  const navigate = useNavigate()

  //!INTERNAL FUNCTIONS:

  //FUNCTION TO DELETE AN USER FROM DB:
  const handleDelete = async () => {
    try {
      await deleteUserService()
      setIsLoggedIn(false);
      localStorage.removeItem("authToken");
      navigate("/signup")
    }
    catch(err){
      navigate("/error")
    }
  }

  //RENDER VIEW:
  return (
    <div className="profileBox">
      <div className="my-profile" > 
        <ProfileSideBar />
        <div className="card-profile" >
         <h1>Delete User Account</h1>
         <h3>Are you sure? This action can't be undone</h3>
         <button id="event-btn" onClick={handleDelete} >Delete User Account</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount