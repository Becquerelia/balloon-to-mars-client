//IMPORTS:
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Weather from "./pages/Weather"
import Gallery from "./pages/Gallery"
import PicOfTheDay from "./pages/PicOfTheDay"
import AstronomicalEvents from "./pages/AstronomicalEvents"
import AstronomicalEventsDetails from "./pages/AstronomicalEventsDetails"
import AstronomicalEventsEdit from "./pages/AstronomicalEventsEdit"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login.jsx"
import NotFound from "./pages/Errors/NotFound"
import Error from "./pages/Errors/Error.jsx"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">

    <Navbar />

      <Routes >  

       <Route path="/" element={ <Home /> } />
       <Route path="/weather" element={ <Weather /> } />
       <Route path="/image-gallery" element={ <Gallery /> } />
       <Route path="/pic-of-the-day" element={ <PicOfTheDay /> } />
       <Route path="/astronomical-events" element={ <AstronomicalEvents /> } />
       <Route path="/astronomical-events/:id/details" element={ <AstronomicalEventsDetails /> } />
       <Route path="/astronomical-events/:id/edit" element={ <AstronomicalEventsEdit /> } />

       <Route path="/signup" element={ <Signup /> } />
       <Route path="/login" element={ <Login /> } />  

       <Route path="/error" element={ <Error /> } />
       <Route path="*" element={ <NotFound /> } />  

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
