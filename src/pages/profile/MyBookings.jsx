//!IMPORTS:
import ProfileSideBar from "../../components/ProfileSideBar"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {getProfileService} from "../../services/profile.services"
import {getMyBookingsService} from "../../services/profile.services"
import RingLoader from "react-spinners/RingLoader";

//!MAIN FUNCTION:
function MyBookings() {

  //!CONSTANTS & HOOKS:
  const [userInfo, setUserInfo] = useState(null)
  const [allBookings, setAllBookings] = useState(null)
  
  const navigate = useNavigate()
  
  useEffect(()=>{
    getUserInfo()
    getAllBookings()   
  }, [])

  //!INTERNAL FUNCTIONS:
  
  //GET USER INFO:
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

    //GET USER'S BOOKINGS:
  const getAllBookings = async () => {
    try {
      const response = await getMyBookingsService();
      console.log(response.data)
      setAllBookings(response.data)      
    }
    catch(err){
      navigate("/error")
    }
  }

  //!LOADING SYSTEM:
  if(!allBookings){ 
    return (
      <div className="loadingRing" >
        <h2>Loading...</h2>
        <RingLoader color="#C83B30" size="10rem" />
      </div>
    )
  }

  //!RENDER VIEW:
  return (
    <div className="profileBox">
      <div className="my-profile" > 
        <ProfileSideBar />
        <div className="card-profile" >
          <h1>Your Bookings:</h1>
          <div className="my-bookings">
            {allBookings.map((eachBooking)=>{
              if (eachBooking.user === userInfo._id) {
                 return(
                <div key={eachBooking._id} className="oneBooking" >
                 <p>Booker name: <b>{eachBooking.firstName} {eachBooking.lastName}</b></p>
                 <p>Date: {eachBooking.date.split("T")[0]}</p>
                  <p>Time: {eachBooking.time}</p>
                 <p>Visitants: {eachBooking.numberOfPersons} persons</p>
                 <p>Total price: {eachBooking.price} €</p>                              
               </div>
              )
              }
            
            })}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default MyBookings