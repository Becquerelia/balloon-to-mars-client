//IMPORTS:
import './App.css';
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import {verifyService} from "./services/auth.services"
import Home from "./pages/Home"
import Observatory from "./pages/Observatory"
import Gallery from "./pages/Gallery"
import PicOfTheDay from "./pages/PicOfTheDay"
import AstronomicalEvents from "./pages/AstronomicalEvents"
import AstronomicalEventsDetails from "./pages/AstronomicalEventsDetails"
import AstronomicalEventsEdit from "./pages/AstronomicalEventsEdit"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login.jsx"
import Profile from "./pages/profile/Profile.jsx"
import MyBookings from "./pages/profile/MyBookings.jsx"
import Admin from "./pages/admin/Admin.jsx"
import AllBookings from "./pages/admin/Admin.jsx"
import NotFound from "./pages/Errors/NotFound"
import Error from "./pages/Errors/Error.jsx"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState(null)

  useEffect(()=>{ 
    verifyUser() 
  }, [])

  const verifyUser = async () => {
    try{
      const response = await verifyService();
      setIsLoggedIn(true);
      setUserRole(response.data.adminRole)   
    }
    catch(err){
      setIsLoggedIn(false);
    }    
  }  
  
  return (
    <div className="App" >

    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />

      <Routes >  

       <Route path="/" element={ <Home /> } />
       <Route path="/observatory" element={ <Observatory /> } />
       <Route path="/image-gallery" element={ <Gallery /> } />
       <Route path="/pic-of-the-day" element={ <PicOfTheDay /> } />
       <Route path="/astronomical-events" element={ <AstronomicalEvents /> } />
       <Route path="/astronomical-events/:id/details" element={ <AstronomicalEventsDetails /> } />
       <Route path="/astronomical-events/:id/edit" element={ <AstronomicalEventsEdit /> } />

       <Route path="/signup" element={ <Signup /> } />
       <Route path="/login" element={ <Login setIsLoggedIn={setIsLoggedIn} userRole={userRole} verifyUser={verifyUser} /> } />

       <Route path="/profile" element={ <Profile /> } />
       <Route path="/profile/my-bookings" element={ <MyBookings /> } />

       <Route path="/profile/admin" element={ <Admin /> } />
       <Route path="/profile/admin/all-bookings" element={ <AllBookings /> } />   

       <Route path="/error" element={ <Error /> } />
       <Route path="*" element={ <NotFound /> } />  

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
