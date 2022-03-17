//IMPORTS:
import eventsLettersImg from "../assets/events-letters.png";
import moonImg from "../assets/moon.jpg";
import meteorShowerImg from "../assets/meteor-shower.jpg";
import planetsImg from "../assets/planetary-conjunction.jpg";
import eclipseImg from "../assets/eclipse.jpg";
import AddForm from "../components/AddForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {getAllEventsService} from "../services/events.services.js"

//MAIN FUNCTION:
function AstronomicalEvents() {

  //CONSTANTS & HOOKS:
  const [allEvents, setAllEvents] = useState(null)
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
        <AddForm getAllEvents={getAllEvents} />
      </div>

      <div>
        {allEvents.map((eachEvent)=>{
          return(
            <div key={eachEvent._id} >
              <section>
                <img src={eachEvent.image === "Moon" ? {moonImg} : eachEvent.image === "Planets" ? {planetsImg} : eachEvent.image === "Meteor Shower" ? {meteorShowerImg} : {eclipseImg} } alt={eachEvent.title} />
                <p>{eachEvent.title}</p>                
                <p>{eachEvent.date.split("T")[0]}</p>
                <p>{eachEvent.visibility}</p>
              </section>              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AstronomicalEvents