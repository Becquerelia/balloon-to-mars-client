//!IMPORTS:
import eventsLettersImg from "../assets/events-letters.png";
import moonImg from "../assets/moon.jpg";
import meteorShowerImg from "../assets/meteor-shower.jpg";
import planetsImg from "../assets/planetary-conjunction.jpg";
import eclipseImg from "../assets/eclipse.jpg";
import nebulosaImg from "../assets/nebulosa.jpg";
import AddForm from "../components/AddForm";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAllEventsService} from "../services/events.services.js";
import {LoggedUserContext} from "../context/loggedUser.context.js";
import RingLoader from "react-spinners/RingLoader";

//!MAIN FUNCTION:
function AstronomicalEvents() {

  //!CONSTANTS & HOOKS:
  const [allEvents, setAllEvents] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const {isLoggedIn} = useContext(LoggedUserContext)
  const navigate = useNavigate()
  
  useEffect(()=>{
    getAllEvents()
  }, [])

  //!INTERNAL FUNCTIONS:
    //FUNCTION TO GET EVENT LIST:
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

  //!LOADING SYSTEM:
  if(!allEvents){ 
    return (
      <div className="loadingRing" >
        <h2>Loading...</h2>
        <RingLoader color="#C83B30" size="10rem" />
      </div>
    )
  }

  //!RENDER VIEW:
  return (
    <div>
      <img src={eventsLettersImg} alt="Logo" width="700rem"/>
      {isLoggedIn &&
      <div>
        <button className="formBtn" onClick={() => setShowForm(!showForm)} > {showForm? "Hide Form" : "Share an Astronomical Event"}</button>
        {showForm && <AddForm getAllEvents={getAllEvents} /> }        
      </div>
      }
      <div className="eventsDisposition" >
        {allEvents.map((eachEvent)=>{
          return(
            <div key={eachEvent._id} className="eventCards" >
              <Link to={`/astronomical-events/${eachEvent._id}/details`} >
                {eachEvent.image === "Moon" ? <img src={moonImg} className="imageCardEvent" /> : eachEvent.image === "Planets" ? <img src={planetsImg} className="imageCardEvent" /> : eachEvent.image === "Meteor Shower" ? <img src={meteorShowerImg} className="imageCardEvent" /> : eachEvent.image === "Eclipse" ? <img src={eclipseImg} className="imageCardEvent" /> : <img src={nebulosaImg} className="imageCardEvent" /> }                            
                <h5>{eachEvent.title}</h5>
                <h6>{eachEvent.date.split("T")[0]}</h6>
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