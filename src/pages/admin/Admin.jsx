//!IMPORTS:
import AdminSideBar from "../../components/AdminSideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getProfileService} from "../../services/profile.services";
import {deleteUserService} from "../../services/profile.services";
import RingLoader from "react-spinners/RingLoader";

//!MAIN FUNCTION:
function Admin(props) {

    //CONSTANTS & HOOKS:
    const {setIsLoggedIn} = props
    const [userInfo, setUserInfo] = useState(null)
    const navigate = useNavigate()
    
    useEffect(()=>{
      getUserInfo()
    }, [])
  
    //!INTERNAL FUNCTIONS:

    //FUNCTION TO GET ADMIN PROFILE FROM BE:
    const getUserInfo = async () => {
      try {
        const response = await getProfileService();
        console.log(response.data)
        setUserInfo(response.data)      
      }
      catch(err){
        if(err.response.status === 401){
          navigate("/login")
        } else {
          navigate("/error")
        }      
      }
    }

  //FUNCTION TO DELETE AN USER
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
  
  //LOADING SYSTEM:
  if(!userInfo){ 
    return (
      <div>
        <RingLoader color="#C83B30" size="10rem" />
        <h2>Loading...</h2>
      </div>
    )
  }
  
  //RENDER VIEW:
  return (
    <div className="profileBox">
      <div className="my-profile" >      
        <AdminSideBar />
        <div className="card-profile" >
          <h1>Welcome, admin {userInfo.username}!</h1>
          <button id="event-btn" onClick={handleDelete} >Delete Admin Account</button>
        </div>
      </div>
    </div>
  )
}

export default Admin