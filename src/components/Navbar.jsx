import logoImg from "../assets/logo-balloon-to-mars.jpg"
import { NavLink } from "react-router-dom"


function Navbar() {
  return (
    <div>

      <img src={logoImg} alt="Logo" width="350rem" />

      <NavLink to="/"> <button>Home</button> </NavLink>

      <NavLink to="/weather"> <button>Weather in Mars</button> </NavLink>

      <NavLink to="/image-gallery"> <button>Gallery</button> </NavLink>

      <NavLink to="/another-places"> <button>Another Places</button> </NavLink>

      <NavLink to="/astronomical-events"> <button>Astronomic Events</button> </NavLink>

    </div>
  )
}

export default Navbar