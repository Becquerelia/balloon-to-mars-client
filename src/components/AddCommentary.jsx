//!IMPORTS:
import { useState } from "react";
import {addNewCommentaryService} from "../services/events.services.js"
import { useParams, useNavigate } from "react-router-dom"

//!MAIN FUNCTION:
function AddCommentary(props) {

  //!CONSTANTS & HOOKS:
  const [user, setUser] = useState("")
  const [text, setText] = useState("")
  const [event, setEvent] = useState("")
  
  const {id} = useParams()
  const navigate = useNavigate()
  const {getAllCommentaries} = props

  //!INTERNAL FUNCTIONS:

    //HANDLE FUNCTIONS:
    const handleUser = (e) => {setUser(e.target.value)}
    const handleText = (e) => {setText(e.target.value)}

    //FUNCTION TO ADD NEW EVENT:
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
          const newCommentary = {user, text, event}
          await addNewCommentaryService(newCommentary)
          getAllCommentaries()
          setUser("")
          setText("")
          setEvent("")       
        }
        catch(err){
          navigate("/error")
        }    
      }
      
  //!RENDER VIEW:      
  return (
    <div>
        <form onSubmit={handleSubmit} className="formDisposition" >

            <label htmlFor="user">Username:</label>
            <input type="text" name="user" value={user} onChange={handleUser} />

            <textarea name="text" cols="60" rows="5" value={text} onChange={handleText}></textarea>

            <button className="formBtn" >Comment</button>

        </form>
    </div>
  )
}

export default AddCommentary