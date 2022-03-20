//!IMPORTS:
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import {getForumService} from "../services/events.services.js"
import AddCommentary from "../components/AddCommentary";
import RingLoader from "react-spinners/RingLoader";

//!MAIN FUNCTION:
function Forum() {
  
  //!CONSTANTS & HOOKS:
  const [allCommentaries, setAllCommentaries] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const {id} = useParams()  
  const navigate = useNavigate()
  
  useEffect(()=>{
    getAllCommentaries()
  }, [])

  //!INTERNAL FUNCTIONS:
   //FUNCTION TO GET THE FORUM (ALL COMMENTARIES ABOUT THE EVENT):
   const getAllCommentaries = async () => {         
    try {
      const response = await getForumService();
      //console.log(response.data)
      setAllCommentaries(response.data)
    }
    catch(err){
      navigate("/error")
    }
  }

//!LOADING SYSTEM:
if(!allCommentaries){ 
  return (
    <div>
      <RingLoader color="#C83B30" size="10rem" />
      <h2>Loading...</h2>
    </div>
  )
}

//!RENDER VIEW:
  return (
    <div className="forum" >
      <h2>Event Forum</h2>
      {allCommentaries.map((eachCommentary)=>{
        if (eachCommentary.event === id){
          return(
          <div key={eachCommentary._id} className="commentaries" >
            <p>Posted by: <b>{eachCommentary.user}</b></p>
            <p>{eachCommentary.text}</p>
          </div>
        )
        }        
      })}
      <div>
        <button className="forum-btn" onClick={() => setShowForm(!showForm)} > {showForm? "Close" : "Comment"}</button>
        {showForm && <AddCommentary getAllCommentaries={getAllCommentaries} /> }        
      </div>            
    </div>
  )
}

export default Forum