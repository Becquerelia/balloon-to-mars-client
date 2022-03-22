//!IMPORTS:
import ProfileSideBar from "../../components/ProfileSideBar"
import PaymentIntent from "../../components/Payment/PaymentIntent"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {getMyBookingsService} from "../../services/profile.services"
import RingLoader from "react-spinners/RingLoader";

//!MAIN FUNCTION:
function MyBookings() {

  //!CONSTANTS & HOOKS:
  const [allBookings, setAllBookings] = useState(null)
  const [bookingToBuy, setBookingToBuy] = useState(null)
  const [isAlreadyPayed, setIsAlreadyPayed] = useState(false)

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

  //FUNCTION TO PAY A BOOKING:
  const handleBuy = (bookingToPay) => {
    setBookingToBuy(bookingToPay)
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
    <div className="my-profile" > 
      <ProfileSideBar />
      <div className="card-profile" >
        <h1>Your Bookings:</h1>
        <div className="my-bookings">
          {allBookings.map((eachBooking)=>{
            return(
              <div key={eachBooking._id} className="oneBooking" >
                <p>Booker name: <b>{eachBooking.firstName} {eachBooking.lastName}</b></p>
                <p>Date: {eachBooking.date.split("T")[0]}</p>
                <p>Time: {eachBooking.time}</p>
                <p>Visitants: {eachBooking.numberOfPersons} persons</p>
                <p>Total price: {eachBooking.price} €</p>
                {!isAlreadyPayed && <button onClick={()=> handleBuy(eachBooking)} >Pay</button>}
                <div className="paymentStyles" > 
                  {bookingToBuy && bookingToBuy._id === eachBooking._id && <PaymentIntent bookingToBuy={bookingToBuy} setIsAlreadyPayed={setIsAlreadyPayed} />}
                </div>
                
              </div>
            )
          })}
        </div>  
      </div>
    </div>
  )
}

export default MyBookings