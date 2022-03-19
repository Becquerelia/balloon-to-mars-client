//!IMPORTS:
import picDayLettersImg from "../assets/picday-letters.png"
import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import RingLoader from "react-spinners/RingLoader";
import {getPicOfTheDayService} from "../services/pic-day.services.js"

//!MAIN FUNCTION:
function PicOfTheDay() {

  //!CONSTANTS & HOOKS:
  const [picDay, setPicDay] = useState(null)
  const navigate = useNavigate()
  
  useEffect(()=>{
    getPicDay()
  }, [])

  //!INTERNAL FUNCTIONS:
  const getPicDay = async () => {
    try {
      const response = await getPicOfTheDayService();
      //console.log(response.data)
      setPicDay(response.data)      
    }
    catch(err){
      navigate("/error")
    }
  }

  //!LOADING SYSTEM:
  if(!picDay){ 
    return (
      <div>
        <RingLoader color="#C83B30" size="10rem" />
        <h2>Loading...</h2>
      </div>
    )
  }

  //!RENDER VIEW:
  return (
    <div>
      <img src={picDayLettersImg} alt="Logo" width="700rem"/>
      <div className="picDay">
        <div>
          <img src={picDay.hdurl} alt="img" width="800rem" />
        </div>
        <div className="explanationDay">
          <h1>{picDay.title}</h1>
          <p>{picDay.explanation}</p>
          <h6>Copyright: {picDay.copyright}</h6>
        </div>
      </div>
    </div>
  )
}

export default PicOfTheDay