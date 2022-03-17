//IMPORTS:
import eventsLettersImg from "../assets/events-letters.png";
import moonImg from "../assets/moon.jpg";
import meteorShowerImg from "../assets/meteor-shower.jpg";
import planetsImg from "../assets/planetary-conjunction.jpg";
import eclipseImg from "../assets/eclipse.jpg";
import nebulosaImg from "../assets/nebulosa.jpg";
import AddForm from "../components/AddForm";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {getAllEventsService} from "../services/events.services.js"

//MAIN FUNCTION:
function AstronomicalEvents() {

  //CONSTANTS & HOOKS:
  const [allEvents, setAllEvents] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const navigate = useNavigate()

  
  useEffect(()=>{
    getAllEvents()
  }, [])

  //INTERNAL FUNCTIONS:
  const getAllEvents = async () => {    
    try {
      const response = await getAllEventsService()
      //console.log(response.data)
      setAllEvents(response.data)
    }
    catch(err){
      navigate("/error")
    }
  }

  //LOADING SYSTEM:
  if(!allEvents){
    return <h2>Loading... Please wait!</h2>
  }

  return (
    <div>

      <img src={eventsLettersImg} alt="Logo" width="700rem"/>

      <div>
        <button onClick={() => setShowForm(!showForm)} > {showForm? "Hide Form" : "Share an Astronomical Event"}</button>
        {showForm && <AddForm getAllEvents={getAllEvents} /> }
        
      </div>

      <div>
        {allEvents.map((eachEvent)=>{
          return(
            <div key={eachEvent._id} >
              <Link to={`/astronomical-events/${eachEvent._id}/details`} >
                {eachEvent.image === "Moon" ? <img src={moonImg} width="100rem" /> : eachEvent.image === "Planets" ? <img src={planetsImg} width="100rem" /> : eachEvent.image === "Meteor Shower" ? <img src={meteorShowerImg} width="100rem" /> : eachEvent.image === "Eclipse" ? <img src={eclipseImg} width="100rem" /> : <img src={nebulosaImg} width="100rem" /> }                            
                <p>{eachEvent.title}</p>                
                <p>{eachEvent.date.split("T")[0]}</p>
                <p>{eachEvent.visibility}</p> 
              </Link>                         
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AstronomicalEvents