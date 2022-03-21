//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/observatory`
})

service.interceptors.request.use((config)=>{
    const storedToken = localStorage.getItem("authToken")
    config.headers = storedToken && {Authorization: `Bearer ${storedToken}`}
    return config;
   })

const bookVisitService = (newBooking) => {
    return service.post("/", newBooking)    
}

const getAllBookingsService = () => {
    return service.get("/all-bookings")    
}

//!EXPORT FUNCTIONS:

export {
    bookVisitService,
    getAllBookingsService
}