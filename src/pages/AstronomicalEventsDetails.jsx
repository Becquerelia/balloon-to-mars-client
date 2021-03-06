//!IMPORTS:
import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteEventService, getEventDetailsService } from "../services/events.services";
import {LoggedUserContext} from "../context/loggedUser.context.js";
import eventsLettersImg from "../assets/events-letters.png";
import moonImg from "../assets/moon.jpg";
import meteorShowerImg from "../assets/meteor-shower.jpg";
import planetsImg from "../assets/planetary-conjunction.jpg";
import eclipseImg from "../assets/eclipse.jpg";
import nebulosaImg from "../assets/nebulosa.jpg";
import RingLoader from "react-spinners/RingLoader";
import Forum from "../components/Forum";

//!MAIN FUNCTION:
function AstronomicalEventsDetails() {

  //CONSTANTS & HOOKS:
  const {id} = useParams()
  const [eventDetails, setEventDetails] = useState(null)
  const {isLoggedIn} = useContext(LoggedUserContext)
  const navigate = useNavigate()

  const paragraph = {
    width:"55%",
    textAlign:"center"
  }

  useEffect(()=>{
    getEventDetails()
  }, [])

  //!INTERNAL FUNCTIONS:
  
    //FUNCTION TO GET EVENT DETAILS FROM BE:
    const getEventDetails = async () => {
      try {
        const response = await getEventDetailsService(id)
        setEventDetails(response.data)
      }
      catch(err){
        navigate("/error")
      }
    }
    
    //FUNCTION TO REMOVE AN EVENT FROM DB:
    const handleClick = async () => {
      try {
        await deleteEventService(id)
        navigate("/astronomical-events")
      }
      catch(err){
        navigate("/error")
      }
    }

  //LOADING SYSTEM:
  if(!eventDetails){ 
    return (
      <div className="loadingRing" >
        <h2>Loading...</h2>
        <RingLoader color="#C83B30" size="10rem" />
      </div>
    )
  }

  //RENDER VIEW:
  return (
    <div>
      <img src={eventsLettersImg} alt="Logo" width="700rem"/>

      <div className="eventDetailsPage">
        
        <div className="eventDetailsCard" >         
          <h2>{eventDetails.title}</h2>
          {eventDetails.image === "Moon" ? <img src={moonImg} width="200rem" /> : eventDetails.image === "Planets" ? <img src={planetsImg} width="200rem" /> : eventDetails.image === "Meteor Shower" ? <img src={meteorShowerImg} width="200rem" /> : eventDetails.image === "Eclipse" ? <img src={eclipseImg} width="200rem" /> : <img src={nebulosaImg} width="200rem" /> }
          <p>Date: {eventDetails.date.split("T")[0]}</p> 
          <p>Time: {eventDetails.hour}</p>
          <p style={paragraph}>{eventDetails.description}</p>                   
          <h5>Visible from: <b>{eventDetails.visibility}</b></h5>
          {isLoggedIn  && 
           <div className="eventDetailsBtn">
              <button id="event-detail-btn" onClick={handleClick} >Delete Event</button>
              <Link to={`/astronomical-events/${eventDetails._id}/edit`} >
              <button id="event-detail-btn" >Update Event</button>
              </Link>
           </div>
          }
        </div>

        <div className="forumSection">
          <Forum />
        </div>
      
      </div>
    </div>
  )
}

export default AstronomicalEventsDetails