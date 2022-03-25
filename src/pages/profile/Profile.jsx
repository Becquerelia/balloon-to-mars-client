//!IMPORTS:
import ProfileSideBar from "../../components/ProfileSideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getProfileService} from "../../services/profile.services";
import RingLoader from "react-spinners/RingLoader";

//!MAIN FUNCTION:
function Profile() {
  
  //CONSTANTS & HOOKS:  
  const [userInfo, setUserInfo] = useState(null)
  const navigate = useNavigate()
  
  useEffect(()=>{
    getUserInfo()
  }, [])

  //!INTERNAL FUNCTIONS:

  //FUNCTION TO GET USER INFO FROM BE:
  const getUserInfo = async () => {
    try {
      const response = await getProfileService();
      //console.log(response.data)
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

  //LOADING SYSTEM:
  if(!userInfo){ 
    return (
      <div className="loadingRing" >
        <h2>Loading...</h2>
        <RingLoader color="#C83B30" size="10rem" />
      </div>
    )
  }

  //RENDER VIEW:
  return (
    <div className="profileBox">
      <div className="my-profile" >      
        <ProfileSideBar />
        <div className="card-profile" >
          <div>            
            <h1>Welcome, {userInfo.username}!</h1>            
          </div>          
          <div className="profileBody">
            <div>
              <img src={userInfo.imageUrl} alt="userPic" width="200rem" className="avatar" />                          
            </div>
            <div>
              <h3>Your user info:</h3>
              <p>Email: {userInfo.email}</p>
              <p>City: {userInfo.city}</p>
              <p>Country: {userInfo.country}</p>  
            </div>                    
          </div>        
        </div>
       </div>
    </div>    
  )
}

export default Profile