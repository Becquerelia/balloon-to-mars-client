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

  const paragraph = {
    width:"60%"
  }
  
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
        <p style={paragraph}>The Mars Science Laboratory and its rover centerpiece, Curiosity, is the most ambitious Mars mission yet flown by NASA. The rover landed on Mars in 2012 with a primary mission to find out if Mars is, or was, suitable for life. Another objective is to learn more about the Red Planet's environment. The rover has seventeen camera "eyes." Some in rover navigation, while others perform science investigations. <br /> Each camera has an application-specific set of optics: 
        <ul>
        <li>⚠️ Engineering cameras <b>FHAZ</b> (Hazard Avoidance), <b>RHAZ</b> (Rear Hazard Avoidance) & <b>NAVCAM</b> (Navigation Cameras).</li>
        <li>☣️ Science cameras <b>MAST, CHEMCAM</b> (Chemistry and Camera Complex) & <b>MAHLI</b> (Mars Hand Lens Imager).</li>
        <li>〽️ One descent imaging camera called <b>MARDI</b> (Mars Descent Imager).</li>
        </ul>
        </p>
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