//!IMPORTS:
import galleryLettersImg from "../assets/gallery-letters.png"
import {useState, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import RingLoader from "react-spinners/RingLoader";
import axios from "axios";

//!MAIN FUNCTION:
function Gallery() {

  //!CONSTANTS & HOOKS:
  const [allImages, setAllImages] = useState(null)
  const navigate = useNavigate()
  
  useEffect(()=>{
    getAllImages()
  }, [])

  //!INTERNAL FUNCTIONS:
  const getAllImages = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/image-gallery")
      console.log(response.data)      
    }
    catch(err){
      navigate("/error")
    }
  }

  //!LOADING SYSTEM:
  if(!allImages){ 
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
      <img src={galleryLettersImg} alt="Logo" width="700rem"/>
    </div>
  )
}

export default Gallery