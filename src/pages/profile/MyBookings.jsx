//!IMPORTS:
import ProfileSideBar from "../../components/ProfileSideBar"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {getMyBookingsService} from "../../services/profile.services"
import RingLoader from "react-spinners/RingLoader";

//!MAIN FUNCTION:
function MyBookings() {

  //!CONSTANTS & HOOKS:
  const [allBookings, setAllBookings] = useState(null)
  const navigate = useNavigate()
  
  useEffect(()=>{
    getAllBookings()
  }, [])
  //!INTERNAL FUNCTIONS:
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
      <div>
        <RingLoader color="#C83B30" size="10rem" />
        <h2>Loading...</h2>
      </div>
    )
  }

  //!RENDER VIEW:
  return (
    <div>
      <ProfileSideBar />
      <h1>Your Bookings:</h1>
      {allBookings.map((eachBooking)=>{
        return(
          <div key={eachBooking._id} >
            <p>Name Booking: {eachBooking.firstName} {eachBooking.lastName}</p>
            <p>Date:{eachBooking.date.split("T")[0]} Time: {eachBooking.time}</p>
            <p>Visitants:{eachBooking.numberOfPersons} person/s</p>
            <p>Total price: {eachBooking.price} €</p>
          </div>
        )
      })}
    </div>
  )
}

export default MyBookings