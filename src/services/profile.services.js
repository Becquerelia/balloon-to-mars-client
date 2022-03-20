//!IMPORTS:
import axios from "axios";

//!FUNCTIONS:

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/profile/my-bookings`
})

 service.interceptors.request.use((config)=>{
     const storedToken = localStorage.getItem("authToken")
     config.headers = storedToken && {Authorization: `Bearer ${storedToken}`}
     return config;
    })

const getMyBookingsService = () => {
    return service.get("/")   
}

//!EXPORT FUNCTIONS:

export {   
    getMyBookingsService
}