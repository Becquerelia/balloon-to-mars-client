//IMPORTS:
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { deleteEventService, getEventDetailsService } from "../services/events.services";
import eventsLettersImg from "../assets/events-letters.png";
import moonImg from "../assets/moon.jpg";
import meteorShowerImg from "../assets/meteor-shower.jpg";
import planetsImg from "../assets/planetary-conjunction.jpg";
import eclipseImg from "../assets/eclipse.jpg";
import nebulosaImg from "../assets/nebulosa.jpg";

//MAIN FUNCTION:
function AstronomicalEventsDetails() {

  //CONSTANTS & HOOKS:
  const {id} = useParams()
  const [eventDetails, setEventDetails] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    getEventDetails()
  }, [])

  //INTERNAL FUNCTIONS:
  const getEventDetails = async () => {
    try {
      const response = await getEventDetailsService(id)
      setEventDetails(response.data)

    }
    catch(err){
      navigate("/error")
    }
  }

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
    return <h2>Loading... Please wait!</h2>
  }

  return (
    <div>

      <img src={eventsLettersImg} alt="Logo" width="700rem"/>

      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>{eventDetails.title}</h2>
          {eventDetails.image === "Moon" ? <img src={moonImg} width="200rem" /> : eventDetails.image === "Planets" ? <img src={planetsImg} width="200rem" /> : eventDetails.image === "Meteor Shower" ? <img src={meteorShowerImg} width="200rem" /> : eventDetails.image === "Eclipse" ? <img src={eclipseImg} width="200rem" /> : <img src={nebulosaImg} width="200rem" /> }
          <p>Date: {eventDetails.date.split("T")[0]}</p>
          <p>Hour: {eventDetails.hour}</p>
          <p>{eventDetails.description}</p>
          <p>Visible from: {eventDetails.visibility}</p>
          <button onClick={handleClick} >Delete Event</button>
        </div>
      </div>

    </div>
  )
}

export default AstronomicalEventsDetails