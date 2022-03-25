//!IMPORTS:
import { useEffect, useState } from "react";
import {editEventService, getEventDetailsService} from "../services/events.services.js";
import { useParams, useNavigate } from "react-router-dom";

//!MAIN FUNCTION:
function AstronomicalEventsEdit() {

  //CONSTANTS & HOOKS:
  const {id} = useParams()
  const navigate = useNavigate()  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [hour, setHour] = useState("")
  const [visibility, setVisibility] = useState("")
  const [image, setImage] = useState("")

  useEffect(()=>{
    getEventDetails()
  }, [])
  
  //!INTERNAL FUNCTIONS:

    //HANDLE FUNCTIONS:
    const handleTitle = (e) => {setTitle(e.target.value)}
    const handleDescription = (e) => {setDescription(e.target.value)}
    const handleDate = (e) => {setDate(e.target.value)}
    const handleHour = (e) => {setHour(e.target.value)}
    const handleVisibility = (e) => {setVisibility(e.target.value)}
    const handleImage = (e) => {setImage(e.target.value)}

    //FUNCTION TO AUTOFILL FORM:
    const getEventDetails = async () => {
      try{
        const response = await getEventDetailsService(id)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setDate(response.data.date)
        setHour(response.data.hour)
        setVisibility(response.data.visibility)
        setImage(response.data.image)
      }
      catch(err){
        navigate("/error")
      }
    }

    //FUNCTION TO EDIT AN EVENT:  
    const handleSubmit = async (e) =>{
      e.preventDefault()
      try {
        const updateEvent = {title, description, date, hour, visibility, image}
        await editEventService(id, updateEvent)
        navigate("/astronomical-events")           
      }
      catch(err){
        navigate("/error")
      }    
    }

//RENDER VIEW:
  return (
    <div>

      <form onSubmit={handleSubmit} className="formDisposition" >

        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="description">Description:</label>
        <textarea name="description" cols="60" rows="5" value={description} onChange={handleDescription}></textarea>

        <label htmlFor="date">Date:</label>
        <input type="date" name="date" value={date} onChange={handleDate} />

        <label htmlFor="hour">Hour:</label>
        <input type="time" name="hour" value={hour} onChange={handleHour} />

        <label htmlFor="visibility">Visible from:</label>
        <input type="text" name="visibility" value={visibility} onChange={handleVisibility} />

        <label htmlFor="image">Type:</label>
        <select name="image" value={image} onChange={handleImage}>          
          <option value="">Select One...</option>
          <option value="Moon">Moon</option>
          <option value="Planets">Planets</option>
          <option value="Meteor Shower">Meteor Shower</option>
          <option value="Eclipse">Eclipse</option>
        </select>

        <button className="formBtn" >Update Event</button>

      </form>
    </div>
  )
}

export default AstronomicalEventsEdit