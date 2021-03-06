//!IMPORTS:
import AdminSideBar from "../../components/AdminSideBar"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {getBookingsService} from "../../services/profile.services.js"
import RingLoader from "react-spinners/RingLoader";

//!MAIN FUNCTION:
function AllBookings() {

  //!CONSTANTS & HOOKS:
  const [allBookings, setAllBookings] = useState(null)
  const navigate = useNavigate()
  
  useEffect(()=>{
    getAllBookings()
  }, [])

  //!INTERNAL FUNCTIONS:
  const getAllBookings = async () => {
    try {
      const response = await getBookingsService();
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
    <div className="profileBox">
      <div className="my-profile" > 
        <AdminSideBar />
        <div className="card-profile" >
          <h1>All Bookings:</h1>
         <div className="my-bookings">
           {allBookings.map((eachBooking)=>{
             return(
               <div key={eachBooking._id} className="oneBooking" >
                 <p>Booker name: <b>{eachBooking.firstName} {eachBooking.lastName}</b></p>
                 <p>Date: {eachBooking.date.split("T")[0]}</p>
                 <p>Time: {eachBooking.time}</p>
                 <p>Visitants: {eachBooking.numberOfPersons} persons</p>
                 <p>Total price: {eachBooking.price} €</p>
                </div>
              )
            })}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default AllBookings