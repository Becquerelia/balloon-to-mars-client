//IMPORTS:
import { useState } from "react";
import {addNewEventService} from "../services/events.services.js"
import { useNavigate } from "react-router-dom"

//MAIN FUNCTION:
function AddForm(props) {

  //CONSTANTS & HOOKS:
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [hour, setHour] = useState("")
  const [visibility, setVisibility] = useState("")
  const [image, setImage] = useState("")

  const navigate = useNavigate()
  const {getAllEvents} = props


  //INTERNAL FUNCTIONS:
  const handleTitle = (e) => {setTitle(e.target.value)}
  const handleDescription = (e) => {setDescription(e.target.value)}
  const handleDate = (e) => {setDate(e.target.value)}
  const handleHour = (e) => {setHour(e.target.value)}
  const handleVisibility = (e) => {setVisibility(e.target.value)}
  const handleImage = (e) => {setImage(e.target.value)}

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const newEvent = {title, description, date, hour, visibility, image}
      await addNewEventService(newEvent)
      getAllEvents()
      setTitle("")
      setDescription("")
      setDate("")
      setHour("")
      setVisibility("")
      setImage("")
    }
    catch(err){
      navigate("/error")
    }    
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit} >

        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="description">Description:</label>
        <textarea name="description" cols="40" rows="8" value={description} onChange={handleDescription}></textarea>
        

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

        <button>Add event</button>

      </form>

    </div>
  )
}

export default AddForm