//!IMPORTS:
import galleryLettersImg from "../assets/gallery-letters.png"
import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import RingLoader from "react-spinners/RingLoader";
import {getAllImagesService} from "../services/gallery.services"

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
      const response = await getAllImagesService();
      console.log(response.data)
      setAllImages(response.data)      
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
      <div className="curiosityCamerasText">
        <p>The rover has seventeen camera "eyes." Some in rover navigation, while others perform science investigations. Each camera has an application-specific set of optics: engineering cameras FHAZ (Hazard Avoidance), RHAZ (Rear Hazard Avoidance) & NAVCAM (Navigation Cameras), science cameras MAST, CHEMCAM (Chemistry and Camera Complex) & MAHLI (Mars Hand Lens Imager) and one descent imaging camera called MARDI (Mars Descent Imager).</p>
      </div>
      <div className="gallery" >
        {allImages.map((eachImage, index)=>{
          return(
            <div className="image-preview" key={eachImage.id} >              
              <img className="zoomEffect" src={eachImage.img_src} alt={`image ${index+1}`} width="300rem" />
              <h4>Rover's Camera: {eachImage.camera.name}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery