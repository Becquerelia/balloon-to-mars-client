//!IMPORTS:
import { useState } from "react";
import Booking from "../components/Booking";
import observatoryLettersImg from "../assets/observatory-letters.png";
import observatoryImg from "../assets/Observatorios-Las-Campanas-1.jpg";
import addressIcon from "../assets/SeekPng.com_address-png_2048143.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/emailBlue.png";
import ObservatoryMap from "../components/ObservatoryMap";

//!MAIN FUNCTION:
function Observatory() {

  //!CONSTANTS & HOOKS:
  const [showForm, setShowForm] = useState(false)

  //!RENDER VIEW:
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
              <p>Avenida del Monte, s/n</p>
            </div>
            <div className="phoneContact">
              <img src={phoneIcon} height="5%" width="5%" alt="phoneIcon" />
              <p>Phone: +34 916 305 555</p>
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
        <div>
          <button className="formBtn" onClick={() => setShowForm(!showForm)} > {showForm? "Not yet" : "Book your visit"}</button>
          {showForm && <Booking /> }        
        </div>
      </div>
    </div>
    
    <div>
      <img src={emailIcon} width="2%" alt="" />
      <h2>Contact by email:</h2>
    </div>
    </div>
  )
}

export default Observatory