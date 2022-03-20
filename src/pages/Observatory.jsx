//!IMPORTS:
import { useState } from "react";
import Booking from "../components/Booking";
import observatoryLettersImg from "../assets/observatory-letters.png";
import observatoryImg from "../assets/Observatorios-Las-Campanas-1.jpg";
import addressIcon from "../assets/SeekPng.com_address-png_2048143.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/emailBlue.png";

//!MAIN FUNCTION:
function Observatory() {

  //!CONSTANTS & HOOKS:
  const [showForm, setShowForm] = useState(false)

  //!RENDER VIEW:
  return (
    <div>

    <img src={observatoryLettersImg} alt="Logo" width="500rem"/>
    <div>
      <img src={observatoryImg} alt="Logo" width="700rem"/>
      <div>        
        <div>
          <button className="formBtn" onClick={() => setShowForm(!showForm)} > {showForm? "Not yet" : "Book your visit"}</button>
          {showForm && <Booking /> }        
        </div>
        <div>
          <h2>Iron Observatory</h2>
          <div>
            <img src={addressIcon} width="2%" alt="" />
            <p>Avenida del Monte, s/n</p>
          </div>
          <div>
            <img src={phoneIcon} width="2%" alt="" />
            <p>Phone: +34 916 305 555</p>
          </div>          
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