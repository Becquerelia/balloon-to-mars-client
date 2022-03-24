//!IMPORTS:
import { useState } from "react";
import {bookVisitService} from "../services/booking.services"
import { useNavigate } from "react-router-dom"
import ObservatoryCalendar from "./ObservatoryCalendar";
import PaymentIntent from "../components/Payment/PaymentIntent"

//!MAIN FUNCTION:
function Booking() {

  //!CONSTANTS & HOOKS:
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [numberOfPersons, setNumberOfPersons] = useState("")
  const [payBooking, setPayBooking] = useState(null)
  const total = (15 * numberOfPersons)

  const navigate = useNavigate()

  //!INTERNAL FUNCTIONS:
  const handleFirstName = (e) => {setFirstName(e.target.value)}
  const handleLastName = (e) => {setLastName(e.target.value)}
  const handleTime = (e) => {setTime(e.target.value)}
  const handleNumberOfPersons = (e) => {setNumberOfPersons(e.target.value)}

  //FUNCTION TO BOOK A VISIT:
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const newBooking = {firstName, lastName, date, time, numberOfPersons, price:total}
      const response = await bookVisitService(newBooking)
      setPayBooking(response.data)
      //navigate("/profile")
    }
    catch(err){
      navigate("/error")
    }    
  }
  
  //!RENDER VIEW:  
  return (
    <div>
      <form onSubmit={handleSubmit} className="formDisposition" >

        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName} />

        <label htmlFor="date">Date:</label>
        <input type="date" name="date" value={date} readOnly />

         <label htmlFor="time">Time:</label>
        <select name="time" value={time} onChange={handleTime}>          
            <option value="">Select One...</option>
            <option value="21:30">21:30</option>
            <option value="22:30">22:30</option>
            <option value="23:30">23:30</option>
        </select>

        <label htmlFor="numberOfPersons">Number of Persons:</label>
        <select name="numberOfPersons" value={numberOfPersons} onChange={handleNumberOfPersons}>          
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>

        <h3>Total: {total} €</h3>

        <ObservatoryCalendar date={date} setDate={setDate} />        

        <button className="formBtn" >Booking!</button>       

      </form>
      
        <div className="paymentStyles" > 
          {payBooking && <PaymentIntent payBooking={payBooking} />}
        </div>

    </div>
  )
}

export default Booking