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
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"
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

       <Route path="/error" element={ <NotFound /> } />
       <Route path="*" element={ <Error /> } />  

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
