import lettersImg from "../assets/letters.png"
import homeImg from "../assets/homeImage.jpg"

function Home() {

  const paragraph = {
    width:"55%"
  }

  return (
    <div>
      
      <img src={lettersImg} alt="Logo" width="750rem"/>
      <div className="welcomeText" >
        <p style={paragraph}>Welcome to our website! A little big community to share astronomical knowledge and meet people with same interest in outer space.
        You can take a balloon to visit Mars if you visit our <a href="https://balloontomars.netlify.app/image-gallery">Gallery</a>, where you can see the images taken by the Rover Curiosity during its mission and discover how the surface of the Red Planet is.
        If you prefer to take a balloon to any other part of the universe, you can visit <a href="https://balloontomars.netlify.app/pic-of-the-day">Pic of the Day</a> section, where you can see the image of the selected day and be surprised by the wonders of the galaxy! <br/><br/>
        But if instead of seeing photos you want to take action and enjoy live astronomy, you can't miss the <a href="https://balloontomars.netlify.app/astronomical-events">Astronomical Events</a> section, where you'll find a calendar of upcoming events: if you are lucky, you will be able to see them from your own city!
        Moreover, we invite you to share with us the next astronomical events and to participate in our forum by <a href="https://balloontomars.netlify.app/signup">registering</a> on our website.
        Also, we encourage you to come visit our observatory in Madrid, where you can enjoy a unique experience exploring the sky and its constellations through our telescopes. Book your visit now from the <a href="/observatory">Observatory</a> section!
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