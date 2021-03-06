//!IMPORTS:
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom"
import {LoggedUserContext} from "../context/loggedUser.context.js";
import Booking from "../components/Booking";
import observatoryLettersImg from "../assets/observatory-letters.png";
import observatoryImg from "../assets/Observatorios-Las-Campanas-1.jpg";
import addressIcon from "../assets/SeekPng.com_address-png_2048143.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/emailBlue.png";
import ObservatoryMap from "../components/ObservatoryMap";
import Collapse from '@mui/material/Collapse';

//!MAIN FUNCTION:
function Observatory() {

  //CONSTANTS & HOOKS:
  const [showForm, setShowForm] = useState(false)
  const {isLoggedIn} = useContext(LoggedUserContext)

  const paragraph = {
    width:"60%"
  }

  //RENDER VIEW:
  return (
    <div>

    <img src={observatoryLettersImg} alt="Logo" width="500rem"/>

    <div>
      <div className="observatory" >        
        <div>
          <img src={observatoryImg} alt="Logo" width="900rem"/>
        </div>        
      
      <div>
        <div className="observatoryAddressCard" >
            <h2>Iron Observatory</h2>
            <div className="addressAndPhone" >
              <div className="address" >
                <img src={addressIcon} height="5%" width="5%" alt="addressIcon" />
                <p style={paragraph}>Avenida del Monte, s/n</p>
              </div>

              <div className="phoneContact">
                <img src={phoneIcon} height="5%" width="5%" alt="phoneIcon" />
                <p style={paragraph}>Phone: +34 916 305 555</p>
              </div>
            </div>             
          </div>

          <ObservatoryMap />
        </div>
      </div>


      <div className="bookingSection" >        
        <div>
          <h2>Come to visit our observatory! Booking your experience here</h2>
          <p>Visits available every Thursday, Friday & Saturday</p>
          <p>Three time slots available: 21.30 - 22.30 - 23.30 H </p>            
        </div>

        {isLoggedIn &&
          <div>
            <button className="formBtn" onClick={() => setShowForm(!showForm)} > {showForm? "Not yet" : "Book your visit"}</button>
            <Collapse in={showForm} > <Booking /> </Collapse>                   
          </div>
        }

        {!isLoggedIn &&
          <NavLink to="/login"> <button className="toLog-toSignup-btn"> Please login to booking your visit </button></NavLink>
        }     

      </div>
    </div>
    
    <div>      
      <h1>Contact us by email </h1>
      <a href="mailto:info@ironobservatory.com"> <img src={emailIcon} width="10%" alt="emailIcon" /> </a>      
    </div>
    </div>
  )
}

export default Observatory