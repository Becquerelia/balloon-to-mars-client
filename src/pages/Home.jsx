//!IMPORTS:
import lettersImg from "../assets/letters.png"
import homeImg from "../assets/homeImage.jpg"
import {NavLink} from "react-router-dom"

//!MAIN FUNCTION:
function Home() {

  //CONSTANTS:
  const paragraph = {
    width:"55%"
  }

  //RENDER VIEW:
  return (
    <div>
      
      <img src={lettersImg} alt="Logo" width="750rem"/>

      <div className="welcomeText" >
        <p style={paragraph}>Welcome to our website! A little big community to share astronomical knowledge and meet people with same interest in outer space.
        You can take a balloon to visit Mars if you visit our <NavLink to="/image-gallery"> Gallery</NavLink>, where you can see the images taken by the Rover Curiosity during its mission and discover how the surface of the Red Planet is.
        If you prefer to take a balloon to any other part of the universe, you can visit <NavLink to="/pic-of-the-day"> Pic of the Day</NavLink> section, where you can see the image of the selected day and be surprised by the wonders of the galaxy! <br/><br/>
        But if instead of seeing photos you want to take action and enjoy live astronomy, you can't miss the <NavLink to="/astronomical-events"> Astronomical Events</NavLink> section, where you'll find a calendar of upcoming events: if you are lucky, you will be able to see them from your own city!
        Moreover, we invite you to share with us the next astronomical events and to participate in our forum by <NavLink to="/signup"> registering</NavLink> on our website.
        Also, we encourage you to come visit our observatory in Madrid, where you can enjoy a unique experience exploring the sky and its constellations through our telescopes. Book your visit now from the <NavLink to="/observatory"> Observatory</NavLink> section!
        </p>
                
        <h3>Don't wait any longer and join our community!🪐✨</h3>      
      </div>

      <div>
        <img src={homeImg} alt="homeImage" width="60%" />
      </div>
      
    </div>
  )
}

export default Home