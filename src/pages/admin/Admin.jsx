//!IMPORTS:
import AdminSideBar from "../../components/AdminSideBar"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {getProfileService} from "../../services/profile.services"
import RingLoader from "react-spinners/RingLoader";


function Admin() {
    //!CONSTANTS & HOOKS:
    const [userInfo, setUserInfo] = useState(null)
    const navigate = useNavigate()
    
    useEffect(()=>{
      getUserInfo()
    }, [])
  
    //!INTERNAL FUNCTIONS:
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
  
    //!LOADING SYSTEM:
    if(!userInfo){ 
      return (
        <div>
          <RingLoader color="#C83B30" size="10rem" />
          <h2>Loading...</h2>
        </div>
      )
    }
  
    //!RENDER VIEW:
  return (
    <div className="my-profile" >      
      <AdminSideBar />
      <div className="card-profile" >
        <h1>Welcome, admin {userInfo.username}!</h1>
      </div>

    </div>
  )
}

export default Admin