import observatoryLettersImg from "../assets/observatory-letters.png";
import observatoryImg from "../assets/Observatorios-Las-Campanas-1.jpg";

function Observatory() {
  return (
    <div>

    <img src={observatoryLettersImg} alt="Logo" width="500rem"/>
    <div>
      <img src={observatoryImg} alt="Logo" width="700rem"/>
      <div>
        <div>Book your visit</div>
        <div>
          <h2>Iron Observatory</h2>
          <p>Avenida del Monte, s/n</p>
          <p>28250 - Torrelodones (Madrid, Spain)</p>
          <p>Phone: +34 916 305 555</p>
        </div>
      </div>
    </div>
    <div>
      <h2>Contact by email:</h2>
    </div>
    </div>
  )
}

export default Observatory