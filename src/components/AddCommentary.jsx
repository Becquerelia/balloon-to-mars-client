//!IMPORTS:
import { useState } from "react";
import {addNewCommentaryService} from "../services/forum.services.js"
import {useNavigate } from "react-router-dom"

//!MAIN FUNCTION:
function AddCommentary(props) {

  //!CONSTANTS & HOOKS:
  const [text, setText] = useState("")    
  const navigate = useNavigate()
  const {getAllCommentaries} = props

  //!INTERNAL FUNCTIONS:

    //HANDLE FUNCTIONS:
    const handleText = (e) => {setText(e.target.value)}

    //FUNCTION TO ADD NEW EVENT:
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
          await addNewCommentaryService(text)
          getAllCommentaries()
          setText("")                
        }
        catch(err){
          navigate("/error")
        }    
      }
      
  //!RENDER VIEW:      
  return (
    <div>
        <form onSubmit={handleSubmit} className="formDisposition" >

            <textarea name="text" cols="60" rows="5" value={text} onChange={handleText}></textarea>

            <button className="formBtn" >Comment</button>

        </form>
    </div>
  )
}

export default AddCommentary